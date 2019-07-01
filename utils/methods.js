import jQuery from 'jquery'

const instance = {}

instance.setMaxHeight = function() {
  jQuery(function() {
    setTimeout(() => {
      const showItem = jQuery('.show-item')

      showItem.each(function() {
        const _this = jQuery(this)
        const height = _this.find('.dropdown-menu').outerHeight()

        _this.css({ minHeight: height + 50 })
      })

    }, 500)
  })
}

instance.reloadPage = function() {
  jQuery(function() {
    setTimeout(() => {
      jQuery('.sidebar-group-items li a[href="/components/scrollspy/"]').click(() => {
        const url = '/components/scrollspy/'
        jQuery(location).attr('href', url)
      })
    }, 500)
  })
}

export default instance