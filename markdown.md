# 标题
# 这是h1
##  这是h2 
###  这是h3
#### 这是h4
##### 这是h5
###### 这是h6
# 区块引用
+ Markdown标记区块引用是使用类似email中用>的引用方式。如果你还熟悉在email信件中的引言部分，你就知道怎么在Markdown文件中建立一个区块引用，那会看起来像是你自己先断好行，然后在每行的最前面加上>：
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
+ Markdown也允许你偷懒只在整个段落的第一行最前面加上>：
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
+ 区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的>：
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
+ 引用的区块内也可以使用其他的Markdown 语法，包括标题、列表、代码区块等：
> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");
# 列表
 Markdown 支持有序列表和无序列表。
无序列表使用星号、加号或是减号作为列表标记：
```
*   Red
*   Green
*   Blue
```
 等同于：
```
+   Red
+   Green
+   Blue
```
 也等同于：
```
-   Red
-   Green
-   Blue
```
 有序列表则使用数字接着一个英文句点：
```
1. Bird
2. McHale
3. Parish
```
 很重要的一点是，你在列表标记上使用的数字并不会影响输出的HTML 结果，上面的列表所产生的HTML 标记为：
```
<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
```
 如果你的列表标记写成：
```
1.  Bird
1.  McHale
1.  Parish
```
 或是：
```
3. Bird
1. McHale
8. Parish
```
你都会得到完全相同的HTML 输出。重点在于，你可以让Markdown 文件的列表数字和输出的结果相同，或是你懒一点，你可以完全不用在意数字的正确性。
<br>如果你使用懒惰的写法，建议第一个项目最好还是从1. 开始，因为Markdown 未来可能会支持有序列表的start 属性。
<br>列表项目标记通常是放在最左边，但是其实也可以缩进，最多3 个空格，项目标记后面则一定要接着至少一个空格或制表符。
<br>要让列表看起来更漂亮，你可以把内容用固定的缩进整理好：
```
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.
```
但是如果你懒，那也行：
```
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
```
如果列表项目间用空行分开，在输出HTML时Markdown就会将项目内容用<p> 标签包起来，举例来说：

```
*   Bird
*   Magic
```
会被转换为：
```
<ul>
<li>Bird</li>
<li>Magic</li>
</ul>
```
但是这个：
```
*   Bird

*   Magic
```
会被转换为：
```
<ul>
<li><p>Bird</p></li>
<li><p>Magic</p></li>
</ul>
```
列表项目可以包含多个段落，每个项目下的段落都必须缩进4 个空格或是1 个制表符：
```
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```
如果你每行都有缩进，看起来会看好很多，当然，再次地，如果你很懒惰，Markdown 也允许：
```
*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.
```
如果要在列表项目内放进引用，那>就需要缩进：
```
*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
```    
如果要放代码区块的话，该区块就需要缩进两次，也就是8个空格或是2个制表符：
```
*   一列表项包含一个列表区块：

        <代码写在这>
```        
当然，项目列表很可能会不小心产生，像是下面这样的写法：
```
1986. What a great season.
```
换句话说，也就是在行首出现数字-句点-空白，要避免这样的状况，你可以在句点前面加上反斜杠。
```
1986\. What a great season.
```
# 代码区块
```js
axios.get('some/url')
  .then(function (res) {
    /* ... */
  })
  .catch(function (err) {
    /* ... */
  });
```
# 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
```
* * *

***

*****

- - -

---------------------------------------
```

# 链接
```
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
```

# 表格
| 一个普通标题 | 一个普通标题 | 一个普通标题 |
| ------ | ------ | ------ |
| 短文本 | 中等文本 | 稍微长一点的文本 |
| 稍微长一点的文本 | 短文本 | 中等文本 |
# 图片
```
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```
# 链接
<http://example.com/>
