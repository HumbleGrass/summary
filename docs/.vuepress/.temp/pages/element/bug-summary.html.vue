<template><div><h2 id="header-固定栏后-边框线消失" tabindex="-1"><a class="header-anchor" href="#header-固定栏后-边框线消失" aria-hidden="true">#</a> header 固定栏后，边框线消失</h2>
<p><img src="/images/element/01.png" alt="alt"></p>
<p>如上图所示，table fixed 右边固定列，前一列右边框线消失了，解决方法如下</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.el-table__row</span> <span class="token punctuation">{</span>
  <span class="token selector">td:not(.is-hidden):last-child</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.el-table__header</span> <span class="token punctuation">{</span>
  <span class="token selector">th:not(.is-hidden):last-child</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="header-固定栏后-底部出现边框" tabindex="-1"><a class="header-anchor" href="#header-固定栏后-底部出现边框" aria-hidden="true">#</a> header 固定栏后，底部出现边框</h2>
<p><img src="/images/element/02.png" alt="alt"></p>
<p>如上图所示，table fixed 左边右边固定列时，固定列下面出现边框，解决方法如下</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.el-table__row</span> <span class="token punctuation">{</span>
  <span class="token selector">td:not(.is-hidden):last-child</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.el-table__header</span> <span class="token punctuation">{</span>
  <span class="token selector">th:not(.is-hidden):last-child</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


