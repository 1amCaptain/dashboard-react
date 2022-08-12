npm install xxxx --legacy-peer-deps命令是什么？为什么可以解决下载时候产生的依赖冲突呢？

npm install xxxx --legacy-peer-deps命令与其说是告诉npm要去干什么，不如说是告诉npm不要去干什么。

legacy的意思：遗产/（软件或硬件）已过时但因使用范围广而难以替代的；而npm install xxxx --legacy-peer-deps命令用于绕过peerDependency里依赖的自动安装；它告诉npm忽略项目中引入的各个依赖模块之间依赖相同但版本不同的问题，以npm v3-v6的方式去继续执行安装操作。

所以其实该命令并没有真的解决冲突，而是忽略了冲突，以“过时”（v3-v6）的方式进行下载操作


npm运行更改端口 
https://www.csdn.net/tags/OtDaMgxsODQwNjktYmxvZwO0O0OO0O0O.html

3:34:58

02:02:08

54:20

输入 rafce 初始化jsx文件

 const handleClick = (clicked) =>{ //?????? 点击拿object进行点击? 点击走页面
        setIsClicked({...initialState,[clicked]:true}) //...是 扩展运算符(…)用于取出参数对象中的所有可遍历属性
    }
    

    要有datasource  结合 .map 进行去对js进行读取数据
    dataSource={customersData}
     {customersGrid.map((item,index) => (<ColumnDirective key={index} {...item}/>))}

