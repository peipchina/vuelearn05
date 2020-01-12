var vm = new Vue({
    el: "#app",
    data:{
        infos:{
            name: '',
            sex: '',
            phone: '',
            birthday: '2018-8-8'
        },
        tableData: [{
            sex: '男',            
            name: '王小虎',
            phone: '上海市普陀区金沙江路 1518 弄',
            birthday: '2018-8-8'
          }, {
            sex: '男',
            name: '王小虎',
            phone: '上海市普陀区金沙江路 1517 弄',
            birthday: '2018-8-8'
          }]

    },
    methods:{
        addInfo: function(){
            var p = {sex:this.infos.sex,name:this.infos.name,phone:this.infos.phone,birthday:this.infos.birthday}
            this.tableData.push(p);
            console.log(this.infos.birthday);
        }
    }
})