import{b as t,l as e,f as a,g as n,J as s}from"./framework.cd64e59b.js";import{_ as o}from"./Datepicker.d42b9282.js";const d=s('<h1 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>This is a reimplementation of <a href="https://github.com/icehaunter/vuejs-datepicker" target="_blank" rel="noopener noreferrer">vuejs-datepicker</a> in Vue 3 and with greatly cleaned up code.</p><p>All date manipulation and formatting are done via the amazing <a href="https://date-fns.org/" target="_blank" rel="noopener noreferrer"><code>date-fns</code></a> library, so it&#39;s a direct dependency of this picker.</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Datepicker comes with styling, but input itself does not. Attributes fall through to the <code>input</code> element, so you can use classes and styles as you would on any input.</p>',5),p=s('<h2 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Package is available on NPM: <a href="https://www.npmjs.com/package/vue3-datepicker" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vue3-datepicker" alt="npm"></a></p><div class="language-sh"><pre><code>npm i vue3-datepicker\n</code></pre></div><p>Then import it in your code and use as a usual component:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Datepicker <span class="token keyword">from</span> <span class="token string">&#39;vue3-datepicker&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> picked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datepicker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picked<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="compatibility"><a class="header-anchor" href="#compatibility" aria-hidden="true">#</a> Compatibility</h2><p>Package is transpiled and should be usable for everyone with ES6 and above, but the styling of the datepicker itself uses CSS Grid and CSS variables.</p><p>Package uses typescript and ships with TS declarations for its components.</p><h2 id="props-and-attributes"><a class="header-anchor" href="#props-and-attributes" aria-hidden="true">#</a> Props and attributes</h2><p>Attribute fallthrough is enabled, so any attribute you apply to the component will be passed down to the input.</p><p>All props which accept formatting strings for dates use <a href="https://date-fns.org/docs/format" target="_blank" rel="noopener noreferrer"><code>date-fns</code> formatting function</a> under the hood, so see that function&#39;s documentation for patterns.</p><p>Main interaction to date selection is done via <code>v-model</code> with <code>Date</code> as expected type of the value passed.</p><p>More in-depth documentation of the props, as well as examples, can be found in <a href="/config.html">Configuration</a></p><table><thead><tr><th>ID</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>upperLimit</code></td><td><code>Date</code></td><td></td><td>Upper limit for available dates for picking</td></tr><tr><td><code>lowerLimit</code></td><td><code>Date</code></td><td></td><td>Lower limit for available dates for picking</td></tr><tr><td><code>disabledDates</code></td><td><code>{ dates: Date[] }</code></td><td></td><td>Dates not available for picking</td></tr><tr><td><code>startingView</code></td><td><code>&#39;day&#39; | &#39;month&#39; | &#39;year&#39;</code></td><td><code>&#39;day&#39;</code></td><td>View on which the date picker should open. Can be either <code>year</code>, <code>month</code>, or <code>day</code></td></tr><tr><td><code>monthHeadingFormat</code></td><td><code>String</code></td><td><code>LLLL yyyy</code></td><td><code>date-fns</code>-type formatting for a month view heading</td></tr><tr><td><code>weekdayFormat</code></td><td><code>String</code></td><td><code>EE</code></td><td><code>date-fns</code>-type formatting for a line of weekdays on day view</td></tr><tr><td><code>inputFormat</code></td><td><code>String</code></td><td><code>yyyy-MM-dd</code></td><td><code>date-fns</code>-type format in which the string in the input should be both parsed and displayed</td></tr><tr><td><code>locale</code></td><td><a href="https://date-fns.org/v2.16.1/docs/I18n#usage" target="_blank" rel="noopener noreferrer"><code>Locale</code></a></td><td><code>date-fns/locale/en</code></td><td><a href="https://date-fns.org/v2.16.1/docs/I18n#usage" target="_blank" rel="noopener noreferrer"><code>date-fns</code> locale object</a>. Used in string formatting (see default <code>monthHeadingFormat</code>)</td></tr><tr><td><code>weekStartsOn</code></td><td><code>Number</code></td><td>1</td><td>Day on which the week should start. Number from 0 to 6, where 0 is Sunday and 6 is Saturday. Week starts with a Monday (1) by default</td></tr></tbody></table><h2 id="styling"><a class="header-anchor" href="#styling" aria-hidden="true">#</a> Styling</h2><p>Styling is done via CSS variables, which control colors used in the popup. All variables, as well as styling example and playground can be found in <a href="/config.html#styling-example-and-playground">Configuration section</a></p>',16),r='{"title":"Introduction","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Compatibility","slug":"compatibility"},{"level":2,"title":"Props and attributes","slug":"props-and-attributes"},{"level":2,"title":"Styling","slug":"styling"}],"relativePath":"index.md","lastUpdated":1612464311266}',i={};const c=Object.assign(i,{expose:[],setup:function(s){const r=t(new Date);return(t,s)=>(e(),a("div",null,[d,n(o,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=t=>r.value=t)},null,8,["modelValue"]),p]))}});export default c;export{r as __pageData};
