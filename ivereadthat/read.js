MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.dataset.ft == '{"tn":">"}') {
            $(this).html("好！")
        }
        else if(this.dataset.ft == '{"tn":"?"}') {
            $(this).html("已好！")
        }
    })
    jQuery(".uiLinkButtonInput").each(function() {
        if (this.value == "Comment" || this.value == "留言") {
            this.value = "留好！"
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
