var that;
Page({
    data: {
        images: [],
        uploadedImages: [],
        imageWidth: getApp().screenWidth / 4 - 10
    },
    onLoad: function (options) {
        that = this;
        var objectId = options.objectId;
    },
    chooseImage: function () {
        // 选择图片
        wx.chooseImage({
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                console.log(tempFilePaths);
                that.setData({
                    images: that.data.images.concat(tempFilePaths)
                });
            }
        })
    },
    previewImage: function () {
        // 预览图集
        wx.previewImage({
            urls: that.data.images
        });
    },
    submit: function () {
        // 提交图片，事先遍历图集数组
        that.data.images.forEach(function (tempFilePath) {
            new AV.File('file-name', {
                blob: {
                    uri: tempFilePath,
                },
            }).save().then(
                // file => console.log(file.url())
                function (file) {
                    // 先读取
                    var uploadedImages = that.data.uploadedImages;
                    uploadedImages.push(file.url());
                    // 再写入
                    that.setData({
                        uploadedImages: uploadedImages
                    });
                    console.log(uploadedImages);
                }
                ).catch(console.error);
        });
        wx.showToast({
            title: '评价成功',
            success: function () {
                wx.navigateBack();
            }
        });
    },
    delete: function (e) {
        var index = e.currentTarget.dataset.index;
        var images = that.data.images;
        images.splice(index, 1);
        that.setData({
            images: images
        });
    }
})