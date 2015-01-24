// ==UserScript==
// @name        好！
// @namespace   https://www.facebook.com
// @description 把你的「讚」改成「好！」
// @include     https://www.facebook.com/*
// @version     1.0
// ==/UserScript==

var $ = function (selector) {
    var matched = (typeof selector === 'string' ? document.querySelectorAll(selector) : selector)

    if (matched) {
        return Array.prototype.slice.call(matched, 0)
    }
    else {
        return null
    }
}

var observer = new MutationObserver(function(mutations, observer) {
    $(".UFILikeLink").forEach(function(e) {
        if(e.dataset.ft === '{"tn":">"}') {
            e.innerHTML = "好！"
        }
        else if(e.dataset.ft === '{"tn":"?"}') {
            e.innerHTML = "已好！"
        }
    })
    
    $(".uiLinkButtonInput").forEach(function(e) {
        if (e.value == "Comment" || e.value == "留言") {
            e.value = "留好！"
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})

