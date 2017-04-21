function authCheck() {
    wx.getStorage({
        key: 'auth',
        success: function(res) {
        
        },
        fail: function () {
            wx.navigateTo({
                url: '../intro/intro'
            })
        }
    })
}

module.exports.authCheck = authCheck