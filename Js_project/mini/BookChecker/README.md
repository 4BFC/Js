# BookChecker
각 함수를 파일들로 분산시키고 project_Mgr에서 각 스크립트들을 모듈화 해서 연결 시켰다. 

각 스크립트를 모듈화하기 위해선 import와 export를 해야한다. 
> import는 아래와 같다. ref : js/create_Element.js
> > <pre><code>{import { get_create_Element } from './create_Element.js';}</code></pre>

> export는 아래와 같다. ref : js/create_Element.js
> > <pre><code>{export function get_create_Box(class_name, element, parent) {...}}</code></pre>

HTML에선 script태그의 type을 'module'로 지정을 해줘야 한다.
> type = 'module'은 아래와 같다. ref : index.html
> > <pre><code>{<script type="module" src="./js/ClickBtn.js"></script>
  <script type="module" src="./js/create_Box.js"></script>
  <script type="module" src="./js/create_Box_value.js"></script>
  <script type="module" src="./js/create_Class.js"></script>
  <script type="module" src="./js/create_Element.js"></script>
  <script type="module" src="./js/project_Mgr.js"></script>}</code></pre>

저장 방식은 local storage를 사용했다.

함수의 overload방식을 구현하려고 했으나 미숙한 점이 있어서 아직은 구현하지 않았다.
