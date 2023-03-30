---
title: element问题汇总
---

## header 固定栏后，边框线消失

![alt](/images/element/01.png)

如上图所示，table fixed 右边固定列，前一列右边框线消失了，解决方法如下

```css
.el-table__row {
  td:not(.is-hidden):last-child {
    right: -1px;
  }
}

.el-table__header {
  th:not(.is-hidden):last-child {
    right: -1px;
  }
}
```

## header 固定栏后，底部出现边框

![alt](/images/element/02.png)

如上图所示，table fixed 左边右边固定列时，固定列下面出现边框，解决方法如下

```css
.el-table__row {
  td:not(.is-hidden):last-child {
    right: -1px;
  }
}

.el-table__header {
  th:not(.is-hidden):last-child {
    right: -1px;
  }
}
```
