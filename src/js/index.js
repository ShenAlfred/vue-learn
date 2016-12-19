/**
 * Created by admin on 2016/12/16.
 */

Vue.component('todo-item', {
    props: ['td'],
    template: "<li>{{ td.text }}</li>"
});

var app = new Vue({
   el: "#app",
    data: {
       List: [
           {
               text: 1
           },
           {
               text: 2
           },
           {
               text: 3
           }
       ]
    }
});

var vm = new Vue({
    el:"#app7",
    data: {
        a: 1123
    },
    created: function() {
        console.log("组件被创建....");
        console.log("数据:" + this.a);
    }
});

var v_html = new Vue({
    el: "#bindHtml",
    data: {
        rawHtml: "<span style='color: red'>绑定Html</span>"
    }
});

var vm_button = new Vue({
    el: "#btn",
    data: {
        someDynamicCondition: true
    }
});
vm.$watch('a', function(newVal, oldVal) {
    console.log("新的值:" + newVal);
    console.log("旧的值:" + oldVal);
    console.log(this);
});


var todo = new Vue({
   el: "#todo-example",
    data: {
        newtodo: '',
        todos: [
            "new item1",
            "new item2",
            "new item3"
        ]
    },
    methods: {
       addNewTodo: function() {
           this.todos.push(this.newtodo);
           this.newtodo = '';
       },
       remove: function(index) {
         this.todos.splice(index, 1)
       }
    }
});

var click_example = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
});

var input_checks = new Vue({
    el: "#student",
    data: {
        checkedNames : []
    }
});

Vue.component('my-component', {
   template: "<h1>{{text}}</h1>",
    data: function() {
       return  {
           text: 'Hello Vue'
       }
    }
});

Vue.component("props-component", {
    template: '<span>props is {{ message }}</span>',
    props: ['message']
});

var components = new Vue({
    el: "#components"
});

