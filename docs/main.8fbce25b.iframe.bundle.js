(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./example/Example.stories.tsx":"./src/example/Example.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./src/example/Example.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Debug",(function(){return Debug}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),MainContext_initialState=(__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),{}),MainContext=Object(react.createContext)(MainContext_initialState),MainContextProvider=MainContext.Provider,jsx_runtime=(MainContext.Consumer,__webpack_require__("./node_modules/react/jsx-runtime.js")),replacer=function replacer(_,value){return void 0===value?null:value},JSONDebugger_JSONDebugger=function JSONDebugger(_ref){var value=_ref.value,_ref$enabled=_ref.enabled;return void 0===_ref$enabled||_ref$enabled?Object(jsx_runtime.jsx)("pre",{children:JSON.stringify(value,replacer,2)}):null},debug_JSONDebugger=JSONDebugger_JSONDebugger;try{JSONDebugger_JSONDebugger.displayName="JSONDebugger",JSONDebugger_JSONDebugger.__docgenInfo={description:"",displayName:"JSONDebugger",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},enabled:{defaultValue:{value:"true"},description:"",name:"enabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/debug/JSONDebugger.tsx#JSONDebugger"]={docgenInfo:JSONDebugger_JSONDebugger.__docgenInfo,name:"JSONDebugger",path:"src/components/debug/JSONDebugger.tsx#JSONDebugger"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Onboarder(props){var _structure$currentSte,steps=props.steps,initialStep=props.initialStep,structure=props.structure,StepContainer=props.StepContainer,_props$debug=props.debug,debug=void 0!==_props$debug&&_props$debug,_React$useState2=_slicedToArray(react.useState(initialStep),2),currentStep=_React$useState2[0],setCurrentStep=_React$useState2[1],_React$useState4=_slicedToArray(react.useState([initialStep]),2),journey=_React$useState4[0],setJourney=_React$useState4[1],_React$useState6=_slicedToArray(react.useState(0),2),journeyPosition=_React$useState6[0],setJourneyPosition=_React$useState6[1],initialState=react.useMemo((function(){return Object.keys(steps).reduce((function(current,key){var _steps$initialState,_Object$assign;return Object.assign({},current,((_Object$assign={})[key]=null!==(_steps$initialState=steps[key].initialState)&&void 0!==_steps$initialState?_steps$initialState:{},_Object$assign))}),{})}),[steps]),_React$useReducer=react.useReducer((function(state,action){var _Object$assign2;return Object.keys(state).some((function(s){return s===action.type}))?Object.assign({},state,((_Object$assign2={})[action.type]=action.value,_Object$assign2)):"reset"===action.type?initialState:state}),initialState),_React$useReducer2=_slicedToArray(_React$useReducer,2),state=_React$useReducer2[0],dispatch=_React$useReducer2[1],selectedState=state[currentStep],currentStepInstance=steps[currentStep],CurrentComponent=currentStepInstance.Component,setState=react.useCallback((function(_state){return dispatch({type:currentStep,value:_state})}),[currentStep]),nextStep=null==structure||null===(_structure$currentSte=structure[currentStep])||void 0===_structure$currentSte?void 0:_structure$currentSte.nextStep,interpolatedNextStep=nextStep?"string"==typeof nextStep?nextStep:nextStep(state):void 0,hasNextStep=Boolean(interpolatedNextStep),goToStep=react.useCallback((function(step){if(step){var _currentStepInstance$,_currentStepInstance$2,possibleRet=null===(_currentStepInstance$=null==currentStepInstance||null===(_currentStepInstance$2=currentStepInstance.beforeNext)||void 0===_currentStepInstance$2?void 0:_currentStepInstance$2.call(currentStepInstance,{state:selectedState,setState:setState}))||void 0===_currentStepInstance$||_currentStepInstance$;Promise.resolve(possibleRet).then((function(ret){var _currentStepInstance$3;ret&&(setJourneyPosition(journeyPosition+1),setJourney(journey.slice(0,journeyPosition+1).concat(step)),setCurrentStep(step),null==currentStepInstance||null===(_currentStepInstance$3=currentStepInstance.afterNext)||void 0===_currentStepInstance$3||_currentStepInstance$3.call(currentStepInstance,{state:selectedState,setState:setState}))}))}}),[null==currentStepInstance?void 0:currentStepInstance.afterNext,selectedState,setState]),goToNextStep=react.useCallback((function(){return goToStep(interpolatedNextStep)}),[interpolatedNextStep,goToStep]),hasPreviousStep=journeyPosition>0,goToPreviousStep=react.useCallback((function(){hasPreviousStep&&(setJourneyPosition(journeyPosition-1),setCurrentStep(journey[journeyPosition-1]))}),[journey,journeyPosition]),reset=react.useCallback((function(){setCurrentStep(initialStep),setJourneyPosition(0),setJourney([initialStep])}),[initialStep]),StepContainerFinal=null!=StepContainer?StepContainer:react.Fragment,sharedProps={currentStep:currentStep,hasNextStep:hasNextStep,nextStep:interpolatedNextStep,goToNextStep:goToNextStep,reset:reset,hasPreviousStep:hasPreviousStep,goToPreviousStep:goToPreviousStep,goToStep:goToStep};return Object(jsx_runtime.jsxs)(MainContextProvider,{value:state,children:[Object(jsx_runtime.jsx)(StepContainerFinal,Object.assign({},sharedProps,{children:Object(jsx_runtime.jsx)(CurrentComponent,Object.assign({state:state[currentStep],setState:setState},sharedProps))})),debug&&Object(jsx_runtime.jsx)(debug_JSONDebugger,{value:{journey:journey,journeyPosition:journeyPosition,currentStep:currentStep,state:state,nextStep:interpolatedNextStep}})]})}Onboarder.displayName="Onboarder";var onboarder_Onboarder=Onboarder;try{Onboarder.displayName="Onboarder",Onboarder.__docgenInfo={description:"",displayName:"Onboarder",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Steps<TState>"}},initialStep:{defaultValue:null,description:"",name:"initialStep",required:!0,type:{name:"string | number | symbol"}},finalStep:{defaultValue:null,description:"",name:"finalStep",required:!0,type:{name:"string | number | symbol"}},structure:{defaultValue:null,description:"",name:"structure",required:!0,type:{name:"Structure<TState>"}},StepContainer:{defaultValue:null,description:"",name:"StepContainer",required:!1,type:{name:"StepContainerComponent<TState>"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/onboarder/Onboarder.tsx#Onboarder"]={docgenInfo:Onboarder.__docgenInfo,name:"Onboarder",path:"src/components/onboarder/Onboarder.tsx#Onboarder"})}catch(__react_docgen_typescript_loader_error){}function StepContainer_StepContainer(props){var children=props.children,goToNextStep=props.goToNextStep,hasNextStep=props.hasNextStep,goToPreviousStep=props.goToPreviousStep,hasPreviousStep=props.hasPreviousStep,reset=props.reset;return Object(jsx_runtime.jsxs)("div",{children:[children,Object(jsx_runtime.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(jsx_runtime.jsx)("button",{onClick:reset,children:"Reset"}),Object(jsx_runtime.jsx)("button",{onClick:goToPreviousStep,disabled:!hasPreviousStep,children:"Previous"}),Object(jsx_runtime.jsx)("button",{onClick:goToNextStep,disabled:!hasNextStep,children:"Next"})]})]})}StepContainer_StepContainer.displayName="StepContainer";var stepContainer_StepContainer=StepContainer_StepContainer;try{StepContainer_StepContainer.displayName="StepContainer",StepContainer_StepContainer.__docgenInfo={description:"",displayName:"StepContainer",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"string | number | symbol"}},goToStep:{defaultValue:null,description:"",name:"goToStep",required:!0,type:{name:"(step: keyof TState) => void"}},hasNextStep:{defaultValue:null,description:"",name:"hasNextStep",required:!0,type:{name:"boolean"}},goToNextStep:{defaultValue:null,description:"",name:"goToNextStep",required:!0,type:{name:"() => void"}},hasPreviousStep:{defaultValue:null,description:"",name:"hasPreviousStep",required:!0,type:{name:"boolean"}},goToPreviousStep:{defaultValue:null,description:"",name:"goToPreviousStep",required:!0,type:{name:"() => void"}},nextStep:{defaultValue:null,description:"",name:"nextStep",required:!0,type:{name:"string | number | symbol | undefined"}},reset:{defaultValue:null,description:"",name:"reset",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/example/stepContainer/StepContainer.tsx#StepContainer"]={docgenInfo:StepContainer_StepContainer.__docgenInfo,name:"StepContainer",path:"src/example/stepContainer/StepContainer.tsx#StepContainer"})}catch(__react_docgen_typescript_loader_error){}var Example_steps={firstStep:{Component:function Component(){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"First step"})}},loopStep:{Component:function Component(_ref){var setState=_ref.setState,state=_ref.state;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{children:"Loop step"}),state.errorMessage&&Object(jsx_runtime.jsxs)("div",{children:["Error: ",state.errorMessage]}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return setState(Object.assign({},state,{counter:state.counter+1,isDirty:!0}))},children:state.counter.toString()})]})},initialState:{counter:0,isDirty:!1},afterNext:function afterNext(_ref2){var state=_ref2.state;(0,_ref2.setState)(Object.assign({},state,{isDirty:!1,errorMessage:void 0}))},beforeNext:function beforeNext(_ref3){var state=_ref3.state,setState=_ref3.setState;return!(state.counter<2)||(setState(Object.assign({},state,{errorMessage:"Increment to at least 2 because rules"})),!1)}},afterLoopStep:{Component:function Component(_ref4){var nextStep=_ref4.nextStep;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"loopStep"===nextStep?"We are looping":"We're done looping."})}},textStep:{Component:function Component(_ref5){var setState=_ref5.setState,state=_ref5.state;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("input",{value:state.message,onChange:function onChange(e){return setState(Object.assign({},state,{message:e.target.value}))}}),Object(jsx_runtime.jsx)("br",{}),"Message: ",state.message]})},initialState:{message:""}},finalStep:{Component:function Component(){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"All done!!!"})}}},Example_structure={firstStep:{nextStep:"loopStep"},loopStep:{nextStep:function nextStep(state){return state.loopStep.isDirty?"afterLoopStep":void 0}},afterLoopStep:{nextStep:function nextStep(state){var _state$loopStep;return(null===(_state$loopStep=state.loopStep)||void 0===_state$loopStep?void 0:_state$loopStep.counter)<3?"loopStep":"textStep"}},textStep:{nextStep:function nextStep(state){var _state$textStep;return null!==(_state$textStep=state.textStep)&&void 0!==_state$textStep&&_state$textStep.message?"finalStep":void 0}}},Example_Example=function Example(_ref6){var debug=_ref6.debug;return Object(jsx_runtime.jsx)(onboarder_Onboarder,{steps:Example_steps,initialStep:"firstStep",finalStep:"finalStep",structure:Example_structure,StepContainer:stepContainer_StepContainer,debug:debug})};Example_Example.displayName="Example";try{Example_Example.displayName="Example",Example_Example.__docgenInfo={description:"",displayName:"Example",props:{debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/example/Example.tsx#Example"]={docgenInfo:Example_Example.__docgenInfo,name:"Example",path:"src/example/Example.tsx#Example"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example",component:Example_Example};var Example_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Example_Example,Object.assign({},args))};Example_stories_Template.displayName="Template";var Default=Example_stories_Template.bind({});Default.args={};var Debug=Example_stories_Template.bind({});Debug.args={debug:!0},Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <Example {...args} />\n)"}},Default.parameters),Debug.parameters=Object.assign({storySource:{source:"(args) => (\n  <Example {...args} />\n)"}},Debug.parameters)},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/assets/code-brackets.svg"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/assets/colors.svg"),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/stories/assets/comments.svg"),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/stories/assets/direction.svg"),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/stories/assets/flow.svg"),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/stories/assets/plugin.svg"),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/stories/assets/repo.svg"),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/stories/assets/stackalt.svg"),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("inlineCode",{parentName:"p"},"stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("code",null,"stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/stories/assets/code-brackets.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},"./src/stories/assets/colors.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},"./src/stories/assets/comments.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},"./src/stories/assets/direction.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},"./src/stories/assets/flow.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},"./src/stories/assets/plugin.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},"./src/stories/assets/repo.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},"./src/stories/assets/stackalt.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);