new Vue({
  el: "#app",
  data: {
    inputValue: "",
    zan: 0,
    logs: [
      {
        date: new Date("2021-07-23T12:00:00"),
        type: "入金",
        money: 1000,
      },
      {
        date: new Date("2021-07-23T13:00:00"),
        type: "出金",
        money: 1000,
      },
    ],
  },
  methods: {
    computed: {
      syukkin() {
        return this.zan - this.inputValue
          ? { disabled: true }
          : { disabled: false }
      },
    },

    inmoney: function() {
      this.zan += this.inputValue
      const now = new Date()
      this.logs.push({ date: now, type: "入金", money: this.inputValue })
    },
    outmoney: function() {
      this.zan -= this.inputValue
      const now = new Date()
      this.logs.push({ date: now, type: "出金", money: this.inputValue })
    },
  },
})
