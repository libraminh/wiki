# indexedDB

Ví dụ đang sử dụng __Vue js__

``` js
data: {
  db: null,
  notes: [],
  futureNote: null
}
```

__Kết nối DB__

``` js
var request = window.indexedDB.open(dbName, 1);
```

__Kết nối lần đầu. Tiến hành khởi tạo objectStore với tên collection__

``` js
this.db = event.target.result;
this.db.createObjectStore(collection, {
  autoIncrement: true
});
```

__Nếu thành công. Tiến hành lấy notes về__

``` js 
request.onsuccess = event => {
  this.db = request.result;
  this.getNotes();
};
```

__Thêm note mới__

``` js 
addNote() {
  // Tạo transaction collection với mode readwrite
  var request = this.db
    .transaction(collection, "readwrite")
    .objectStore(collection)
    .add({
      content: this.futureNote,
      completed: false
    });
  this.futureNote = null;
  request.onsuccess = event => {
    // Lấy lại notes sau khi đã thêm giá trị mới
    this.getNotes();
  };
}
```

__Chỉnh sửa dữ liệu__
``` js
markComplete(key) {
  var objectStore = this.db
    .transaction(collection, "readwrite")
    .objectStore(collection);
  var request = objectStore.get(key);

  request.onsuccess = event => {
    var data = event.target.result;
    data.completed = true;

    // Update dữ liệu mới
    var requestUpdate = objectStore.put(data, key);

    // Lấy dữ liệu mới sau khi update
    requestUpdate.onsuccess = event => {
      this.getNotes();
    };
  };
}
```

__Lặp qua Notes để lấy dữ liệu__

``` js
getNotes() {
  this.notes = [];
  var objectStore = this.db.transaction(collection).objectStore(collection);

  // Sử dụng cursor để lấy lần lượt dữ liệu
  objectStore.openCursor().onsuccess = event => {
    var cursor = event.target.result;

    if (cursor) {
      // Nếu có cursor. Push dữ liệu và tiếp tục với record tiếp theo
      this.notes.push({
        id: cursor.key,
        value: cursor.value
      });
      cursor.continue();
    }
  };
}
```

__Lấy 1 dữ liệu theo key__

``` js
showNote(key) {
  var objectStore = this.db.transaction(collection).objectStore(collection);
  var request = objectStore.get(key);

  request.onsuccess = function(event) {
    // Giá trị value trong DB chính là event.target.result
    alert(
      `Note detail: ${event.target.result.content}. Completed: ${event
        .target.result.completed}`
    );
  };
}
```

__Xóa dữ liệu__

``` js
deleteNote(key) {
  var request = this.db
    .transaction(collection, "readwrite")
    .objectStore(collection)
    .delete(key);

  // Lấy lại notes sau khi đã xóa note
  request.onsuccess = event => {
    this.getNotes();
  };
}
```