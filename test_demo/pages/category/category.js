// category.js
Page({
    data: {
      Drgee: [{
          id: 1,
          desc: "first data",
          secondDrgee: [{
              id: 11,
              desc: "inner data 11",
              thirdDrgee: [{
                  id: 111,
                  desc: "inside data 111"
              }]
          },{
              id: 12,
              desc: "inner data 12"
          }]   
      }, {
          id: 2,
          desc: "second data",
          secondDrgee: [{
              id: 21,
              desc: "inner data 21",
              thirdDrgee: [{
                  id: 211,
                  desc: "inside data 211"
              }]
          }, {
              id: 22,
              desc: "inner data 22"
          }]
      }],
      //官方示例
      objectArray: [
          { id: 5, unique: 'unique_5' },
          { id: 4, unique: 'unique_4' },
          { id: 3, unique: 'unique_3' },
          { id: 2, unique: 'unique_2' },
          { id: 1, unique: 'unique_6' },
          { id: 0, unique: 'unique_5' },
      ],
      numberArray: [1, 2, 3, 4]
    },
    switch: function (e) {
        const length = this.data.objectArray.length
        for (let i = 0; i < length; ++i) {
            const x = Math.floor(Math.random() * length)
            const y = Math.floor(Math.random() * length)
            const temp = this.data.objectArray[x]
            this.data.objectArray[x] = this.data.objectArray[y]
            this.data.objectArray[y] = temp
        }
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addToFront: function (e) {
        const length = this.data.objectArray.length
        this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addNumberToFront: function (e) {
        this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
        this.setData({
            numberArray: this.data.numberArray
        })
    }
})

  
