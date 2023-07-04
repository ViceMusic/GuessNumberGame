'use strict';
//about dom?
//document.querySelect('选择器')  选择器函数,可以具具体选择一个dom对象
//然后可以选择性的获取value,textContent之类的东西
//其实还有一个函数,getElementById(),也是可用的
//dom: document object model
//结构化的html文件代表,允许js取访问html元素并且操作他们

//dom tree
//dom元素被浏览器创建,并且以一个树形的结构进行存储
//对应的就算一个嵌套结构
//dom树最开始的document标签,标签内部具体的文本被称作TEXT,是dom树的最底层

//注意,dom元素相关的部分不是js中的内容,而是web api中的内容
//js是exmascript的一种规范



//关于点击事件
//监听元素上发生的事件
//(the dom which was get before).addEventListener(type of event, method)
//像这样是就是给一个dom元素增加一个监听事件,监听到对应事件以后,就开启函数
//这个函数可以是一个回调函数 ()=>{}这样子

//使用绑定事件的方式来进行

//定义秘密数字
let num=Math.trunc(Math.random()*20)+1

//获取提示元素
const mes=document.querySelector('.message')

//获取当前分数
const score=document.querySelector('.score')

//获取最高分数
const highScore=document.querySelector('.highscore')
//给按钮绑定事件


//查询数字按钮
const dom=document.querySelector('.check')
dom.addEventListener('click',()=>{
    //获取目前的数字
    let inputNum=document.querySelector('.guess').value
    if(!inputNum){
        mes.textContent="_(:3|∠)_ where is number?"
    }else if(inputNum>num){
        mes.textContent="too big"
    }else  if(inputNum<num){
        mes.textContent="too small"
    }else{
        mes.textContent="success"
        score.textContent++
    }
})

//again按钮
const dom_again=document.querySelector('.again')
dom_again.addEventListener('click',()=>{
   if(score.textContent>highScore.textContent){
       highScore.textContent=score.textContent;
   }
   score.textContent='0'
   mes.textContent='Start guessing...'
    //重新生成数字
   num=Math.trunc(Math.random()*20)+1
})
