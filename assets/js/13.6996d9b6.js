(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{815:function(v,_,l){"use strict";l.r(_);var a=l(43),r=Object(a.a)({},function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"css-scroll-snap"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#css-scroll-snap","aria-hidden":"true"}},[v._v("#")]),v._v(" css scroll snap")]),v._v(" "),l("p",[v._v("呵呵哒, 本来想搜 "),l("code",[v._v("css shape")]),v._v(" 的, 结果 shape (形状背景, 可以实现不规则背景) 这个单词记不得了. 打成了 snap 试一下模糊搜寻, 没成想搜出来这个东西, 新是不新, 就是没见过, 没用过, 看了一下发现, 用处还真不小, 可以节省了不少 "),l("code",[v._v("js")]),v._v(", 于是乎便借这篇短文给记录下来.")]),v._v(" "),l("h2",{attrs:{id:"类-flex-风格"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#类-flex-风格","aria-hidden":"true"}},[v._v("#")]),v._v(" 类 "),l("code",[v._v("flex")]),v._v(" 风格")]),v._v(" "),l("p",[v._v("这个属性基本由两个属性指定. 一个必须作用在父元素, 一个必须作用在子元素. 嗯? 看着是不是跟 felx 一样一样的. 难道是师出同门?")]),v._v(" "),l("p",[v._v("废话不多说. 先来一个例子. 试着稍微轻轻的滚动一下?")]),v._v(" "),l("ScrollSnapDemo"),v._v(" "),l("p",[v._v("嗯, 运行得挺好.")]),v._v(" "),l("p",[v._v("我猜你已经把代码也看了一遍了, 下面我们来再来废话一下, 不然这个文章可就太短了.")]),v._v(" "),l("h2",{attrs:{id:"scroll-snap-type"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scroll-snap-type","aria-hidden":"true"}},[v._v("#")]),v._v(" scroll-snap-type")]),v._v(" "),l("p",[v._v("看回例子, 这个属性有两个值, 第一个是 "),l("code",[v._v("Y")]),v._v(", 指的是 Y 轴, 你可以指定为 "),l("code",[v._v("X")]),v._v(" 来指定是 X 轴的滚动, 或者 "),l("code",[v._v("block")]),v._v(" "),l("code",[v._v("inline")]),v._v(" 来指定特殊行为. 你还可以指定为 "),l("code",[v._v("both")]),v._v(" 来同时指定两个方向的滚动类型.")]),v._v(" "),l("p",[v._v("第二个是 "),l("code",[v._v("madatory")]),v._v(" (强制的).意思就是,强制滚动,从上面的例子你可以看到,无论我们滚动到哪里, 他都会自己滚动一下, 以适应子元素定义的对齐方式("),l("code",[v._v("scroll-snap-align")]),v._v("), 他还可以是 "),l("code",[v._v("proximity")]),v._v(" (接近的) 意思就是,只有在滚动到接近他的对齐方式的位置时候, 他才会自动滚动到该位置, 如果差很远, 他是不会有滚动行为发生的. (可以直接在上面的 代码区域直接修改噢!)")]),v._v(" "),l("p",[v._v("强制滚动是有一个缺点的, 像上面那种情况,就是如果我就是想要停留在底部,你会发现 这TM根本就由不得我....所以,除非你一个子元素的内容能在父元素的可视范围内看完, 不然你使用强制滚动类型你是看不到底部内容的😢")]),v._v(" "),l("h3",{attrs:{id:"block-和-inline"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#block-和-inline","aria-hidden":"true"}},[v._v("#")]),v._v(" block 和 inline")]),v._v(" "),l("p",[l("code",[v._v("scroll-snap-type: blcok mandatory")]),v._v(" 效果跟 "),l("code",[v._v("scroll-snap-type: y mandatory")]),v._v(" 一样一样的, 因为 "),l("code",[v._v("block")]),v._v("指的试 块级元素排列方向的轴, 默认他就是Y轴, 而 inline 指的试 内联元素排列的方向轴, 默认他就是X 轴, 奇怪了, 那么为什么要区分开来呢?")]),v._v(" "),l("p",[v._v("其实block 和 inline 的方向轴 试可以改变的, 有时候 inline 他也可以是垂直的. 他是可以修改的, 这部分知识就不再这里累述了! 感兴趣的同学可以自行搜索理解.")]),v._v(" "),l("h2",{attrs:{id:"scroll-snap-align"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scroll-snap-align","aria-hidden":"true"}},[v._v("#")]),v._v(" scroll-snap-align")]),v._v(" "),l("p",[v._v("看属性就知道, "),l("code",[v._v("scroll-snap-align")]),v._v(" 一种对齐方式. 类似的有, "),l("code",[v._v("text-align")]),v._v(", "),l("code",[v._v("align-items")]),v._v(", "),l("code",[v._v("align-content")]),v._v(", "),l("code",[v._v("vertical-align")]),v._v(" and so on")]),v._v(" "),l("p",[v._v("这个属性决定的是,自动对齐的位置.")]),v._v(" "),l("p",[v._v("这个属性有3个值 在上面的例子中, 我们使用过了 "),l("code",[v._v("start")]),v._v("(自动滚动到当前元素的头部), 他还可以取 "),l("code",[v._v("end")]),v._v(", "),l("code",[v._v("center")]),v._v(" 这两个值, "),l("code",[v._v("end")]),v._v(" 不用解释了, 对齐底部, 就是他会自动滚动到当前元素的底部, "),l("code",[v._v("center")]),v._v(" 也不用解释了, 自动滚动到当前元素的中间")]),v._v(" "),l("p",[v._v("注意这个当前元素的判定, 你可以自己尝试一下, 滚动到两个元素交界, 你会发现他的判定是会改变的.")]),v._v(" "),l("h2",{attrs:{id:"scroll-padding"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scroll-padding","aria-hidden":"true"}},[v._v("#")]),v._v(" scroll-padding")]),v._v(" "),l("p",[v._v("这也是一个作用在滚动容器的属性, 他决定了, 滚动到对齐位置的间距, 废话不多说, 下面来一个例子.")]),v._v(" "),l("p",[v._v("尝试改变 "),l("code",[v._v("scroll-padding")]),v._v(" 的值来体验一下(别忘了试一下负值).")]),v._v(" "),l("ScrollSnapPaddingDemo"),v._v(" "),l("p",[v._v("在某些情况下这很有用. 比如你想在上面固定显示一个标题, 如果对齐方式你设置为 "),l("code",[v._v("start")]),v._v(" 那么每次回滚都会被标题盖住(绝对定位), 如果这时候你设置一个 "),l("code",[v._v("scroll-padding")]),v._v(",  你看, 世界是不是完美了!")]),v._v(" "),l("p",[v._v("嗯? 有 padding 怎么能没有 "),l("code",[v._v("margin")]),v._v(" 你知道你猜到了没有.")]),v._v(" "),l("h2",{attrs:{id:"scroll-margin"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scroll-margin","aria-hidden":"true"}},[v._v("#")]),v._v(" scroll-margin")]),v._v(" "),l("p",[v._v("这里我不贴例子了好吗, 自己上去改一下😏")]),v._v(" "),l("p",[v._v("不同的是, 这个是设置在"),l("strong",[v._v("子元素")]),v._v("上的噢.")]),v._v(" "),l("p",[v._v("这个距离是对齐位置和元素顶部或者是底部的距离 我把他称作"),l("code",[v._v("对齐外边距")])]),v._v(" "),l("p",[l("strong",[v._v("记住这个词 我在下面会用到")])]),v._v(" "),l("p",[l("strong",[v._v("同样记得尝试一下负值哦")])]),v._v(" "),l("p",[v._v("其他类似属性")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("scroll-margin-block")])])]),v._v(" "),l("p",[v._v("默认是上下方向的 对齐外边距")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("scroll-margin-block-end")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin-block-start")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin-inline-start")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin-inline-end")])])]),v._v(" "),l("p",[v._v("start: block/inline 轴开头的方向(默认是上), 当对齐方式是 "),l("code",[v._v("start")]),v._v(" 时, 效果才看得明显.")]),v._v(" "),l("p",[v._v("end: block/inline 轴结尾的方向(默认是上), 当对齐方式是 "),l("code",[v._v("end")]),v._v(" 时, 效果才看得明显.")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("scroll-margin-bottom")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin-top")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin-left")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin-right")])])]),v._v(" "),l("p",[v._v("同上, 默认情况时 跟 "),l("code",[v._v("block-end")]),v._v(" "),l("code",[v._v("inline-end")]),v._v("等 变现一一对应.")]),v._v(" "),l("p",[l("strong",[v._v("注意")]),v._v(" "),l("code",[v._v("scroll-padding")]),v._v(" 跟 "),l("code",[v._v("scroll-margin")]),v._v(" 一样拥有同样的变种属性.")]),v._v(" "),l("p",[v._v("再次提醒: "),l("code",[v._v("scroll-padding")]),v._v(" 作用于父元素哦")]),v._v(" "),l("h2",{attrs:{id:"scroll-snap-stop"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scroll-snap-stop","aria-hidden":"true"}},[v._v("#")]),v._v(" scroll-snap-stop")]),v._v(" "),l("p",[v._v("这是一个没有实现的属性, 他初步定义于, 让每一个子元素都可以滚动得到, 不会一瞬间就滚动得很多. 用于做缓冲, 不过有一个问题就是, 如果页面过长的话, 用户要滚动很久才能到达底部...")]),v._v(" "),l("p",[v._v("这是一个作用在父元素上的属性.")]),v._v(" "),l("p",[l("strong",[v._v("注意")]),v._v(" 这是一个实验中的属性, 有可能会被移除.")]),v._v(" "),l("p",[v._v("最后, 贴一张浏览器兼容图")]),v._v(" "),l("p",[l("img",{attrs:{src:"/compatibility/scrollsnapcompatibility.png",alt:"加载图片失败"}})]),v._v(" "),l("h2",{attrs:{id:"总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),l("p",[v._v("使用在父元素的属性")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("scroll-snap-type")])]),v._v(" "),l("li",[l("code",[v._v("scroll-padding")]),v._v("以及变种")]),v._v(" "),l("li",[l("code",[v._v("scroll-snap-stop")]),v._v("(实验中)")])]),v._v(" "),l("p",[v._v("使用在子元素的属性")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("scroll-snap-align")])]),v._v(" "),l("li",[l("code",[v._v("scroll-margin")]),v._v(" 以及变种")])])],1)},[],!1,null,null,null);_.default=r.exports}}]);