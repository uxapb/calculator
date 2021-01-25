(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TODO_2'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'TODO_2'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'TODO_2'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'TODO_2'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'TODO_2'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'TODO_2'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'TODO_2'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'TODO_2'.");
    }root.TODO_2 = factory(typeof TODO_2 === 'undefined' ? {} : TODO_2, kotlin, this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var getKClass = Kotlin.getKClass;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var equals = Kotlin.equals;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var set_minHeight = $module$kotlin_css.kotlinx.css.set_minHeight_n8chyh$;
  var set_padding = $module$kotlin_css.kotlinx.css.set_padding_krvuuu$;
  var set_marginBottom = $module$kotlin_css.kotlinx.css.set_marginBottom_n8chyh$;
  var set_border = $module$kotlin_css.kotlinx.css.set_border_krvuuu$;
  var FlexWrap = $module$kotlin_css.kotlinx.css.FlexWrap;
  var set_flexWrap = $module$kotlin_css.kotlinx.css.set_flexWrap_6el38z$;
  var set_marginRight = $module$kotlin_css.kotlinx.css.set_marginRight_n8chyh$;
  var set_marginLeft = $module$kotlin_css.kotlinx.css.set_marginLeft_n8chyh$;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  Button.prototype = Object.create(RComponent.prototype);
  Button.prototype.constructor = Button;
  Form.prototype = Object.create(RComponent.prototype);
  Form.prototype.constructor = Form;
  Result.prototype = Object.create(RComponent.prototype);
  Result.prototype.constructor = Result;
  function resultFiller() {
  }
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda($receiver) {
    return Unit;
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    form($receiver, App$render$lambda);
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function Button() {
    RComponent_init(this);
  }
  function Button$render$lambda$lambda$lambda(this$Button) {
    return function (it) {
      this$Button.props.buttonHandler(this$Button.props.num);
      return Unit;
    };
  }
  Button.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    var $receiver_1 = $receiver_0.css;
    set_height($receiver_1, get_px(50));
    set_fontSize($receiver_1, get_px(16));
    set_width($receiver_1, get_px(50));
    set_backgroundColor($receiver_1, Color.Companion.white);
    set_onClickFunction($receiver_0.attrs, Button$render$lambda$lambda$lambda(this));
    $receiver_0.unaryPlus_pdl1vz$(this.props.num.toString());
    $receiver.child_52psg1$($receiver_0.create());
  };
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [RComponent]
  };
  function button$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function button($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Button), button$lambda(handler));
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  var value;
  function myToDouble(value) {
    return equals(value, '') ? 0.0 : toDouble(value);
  }
  function getResult(firstNumber, secondNumber, operator) {
    var tmp$;
    switch (operator) {
      case 43:
        tmp$ = firstNumber + secondNumber;
        break;
      case 42:
        tmp$ = firstNumber * secondNumber;
        break;
      case 47:
        tmp$ = firstNumber / secondNumber;
        break;
      case 37:
        tmp$ = firstNumber % secondNumber;
        break;
      default:tmp$ = 0.0;
        break;
    }
    return tmp$;
  }
  function Form() {
    RComponent_init(this);
  }
  function Form$init$lambda$lambda($receiver) {
    $receiver.inputValue = '0';
    $receiver.firstNumber = 0.0;
    $receiver.secondNumber = 0.0;
    $receiver.result = 0.0;
    $receiver.equalsPressed = false;
    return Unit;
  }
  function Coroutine$Form$init$lambda(this$Form_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Form = this$Form_0;
  }
  Coroutine$Form$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Form$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Form$init$lambda.prototype.constructor = Coroutine$Form$init$lambda;
  Coroutine$Form$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return setState(this.local$this$Form, Form$init$lambda$lambda), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Form$init$lambda(this$Form_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Form$init$lambda(this$Form_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Form.prototype.init_bc6fkx$ = function ($receiver) {
    launch(MainScope(), void 0, void 0, Form$init$lambda(this));
  };
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$num) {
    return function ($receiver) {
      if (equals($receiver.inputValue, '0') || $receiver.result === myToDouble($receiver.inputValue)) {
        $receiver.inputValue = '';
      }$receiver.inputValue = $receiver.inputValue + closure$num.toString();
      $receiver.equalsPressed = false;
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda(this$Form) {
    return function (num) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda(num));
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda(closure$i, this$Form) {
    return function ($receiver) {
      $receiver.num = closure$i;
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$num) {
    return function ($receiver) {
      if (equals($receiver.inputValue, '0') || $receiver.result === myToDouble($receiver.inputValue)) {
        $receiver.inputValue = '';
      }$receiver.inputValue = $receiver.inputValue + closure$num.toString();
      $receiver.equalsPressed = false;
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Form) {
    return function (num) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(num));
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_0(this$Form) {
    return function ($receiver) {
      $receiver.num = 0;
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$num) {
    return function ($receiver) {
      if (equals($receiver.inputValue, '')) {
        $receiver.inputValue = '0';
      }$receiver.inputValue = $receiver.inputValue + closure$num.toString();
      $receiver.equalsPressed = false;
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Form) {
    return function (num) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(num));
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_1(this$Form) {
    return function ($receiver) {
      $receiver.num = '.';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.inputValue = '0';
    $receiver.result = 0.0;
    $receiver.firstNumber = 0.0;
    $receiver.secondNumber = 0.0;
    $receiver.equalsPressed = false;
    return Unit;
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_2(this$Form) {
    return function (f) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda_0(this$Form) {
    return function ($receiver) {
      $receiver.num = 'C';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda_2(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    if ($receiver.firstNumber === 0.0) {
      $receiver.firstNumber = myToDouble($receiver.inputValue);
    } else
      $receiver.secondNumber = myToDouble($receiver.inputValue);
    $receiver.result = $receiver.secondNumber === 0.0 ? $receiver.firstNumber : getResult($receiver.firstNumber, $receiver.secondNumber, unboxChar($receiver.operator));
    $receiver.operator = toBoxedChar(43);
    $receiver.inputValue = $receiver.result === $receiver.firstNumber || $receiver.result === 0.0 ? '' : $receiver.result.toString();
    if ($receiver.result !== 0.0)
      $receiver.firstNumber = $receiver.result;
    $receiver.equalsPressed = false;
    return Unit;
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_3(this$Form) {
    return function (f) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda_1(this$Form) {
    return function ($receiver) {
      $receiver.num = '+';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda_3(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    if ($receiver.firstNumber === 0.0) {
      $receiver.firstNumber = myToDouble($receiver.inputValue);
    } else
      $receiver.secondNumber = myToDouble($receiver.inputValue);
    $receiver.result = $receiver.secondNumber === 0.0 ? getResult($receiver.firstNumber, 1.0, unboxChar($receiver.operator)) : getResult($receiver.firstNumber, $receiver.secondNumber, unboxChar($receiver.operator));
    if ($receiver.equalsPressed)
      $receiver.result = $receiver.firstNumber;
    $receiver.operator = toBoxedChar(42);
    $receiver.inputValue = $receiver.result === $receiver.firstNumber || $receiver.result === 0.0 ? '' : $receiver.result.toString();
    if ($receiver.result !== 0.0)
      $receiver.firstNumber = $receiver.result;
    $receiver.equalsPressed = false;
    return Unit;
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_4(this$Form) {
    return function (f) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda_2(this$Form) {
    return function ($receiver) {
      $receiver.num = '*';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda_4(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    if ($receiver.firstNumber === 0.0) {
      $receiver.firstNumber = myToDouble($receiver.inputValue);
    } else {
      $receiver.secondNumber = myToDouble($receiver.inputValue);
    }
    if ($receiver.secondNumber === 0.0)
      $receiver.secondNumber = 1.0;
    $receiver.result = getResult($receiver.firstNumber, $receiver.secondNumber, unboxChar($receiver.operator));
    if ($receiver.equalsPressed)
      $receiver.result = $receiver.firstNumber;
    $receiver.operator = toBoxedChar(47);
    $receiver.inputValue = $receiver.result === $receiver.firstNumber || $receiver.result === 0.0 ? '' : $receiver.result.toString();
    if ($receiver.result !== 0.0)
      $receiver.firstNumber = $receiver.result;
    $receiver.equalsPressed = false;
    return Unit;
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_5(this$Form) {
    return function (f) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda_5);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda_3(this$Form) {
    return function ($receiver) {
      $receiver.num = '/';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda_5(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    if ($receiver.firstNumber === 0.0) {
      $receiver.firstNumber = myToDouble($receiver.inputValue);
    } else {
      $receiver.secondNumber = myToDouble($receiver.inputValue);
    }
    if ($receiver.secondNumber === 0.0)
      $receiver.secondNumber = 1.0;
    $receiver.result = getResult($receiver.firstNumber, $receiver.secondNumber, unboxChar($receiver.operator));
    if ($receiver.equalsPressed)
      $receiver.result = $receiver.firstNumber;
    $receiver.operator = toBoxedChar(37);
    $receiver.inputValue = $receiver.result === $receiver.firstNumber || $receiver.result === 0.0 ? '' : $receiver.result.toString();
    if ($receiver.result !== 0.0)
      $receiver.firstNumber = $receiver.result;
    $receiver.equalsPressed = false;
    return Unit;
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_6(this$Form) {
    return function (f) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda_6);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda_4(this$Form) {
    return function ($receiver) {
      $receiver.num = '%';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda_6(this$Form);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    println($receiver.firstNumber);
    $receiver.secondNumber = myToDouble($receiver.inputValue);
    println($receiver.secondNumber);
    $receiver.result = getResult($receiver.firstNumber, $receiver.secondNumber, unboxChar($receiver.operator));
    $receiver.inputValue = $receiver.result.toString();
    $receiver.firstNumber = 0.0;
    $receiver.secondNumber = 0.0;
    $receiver.equalsPressed = true;
    return Unit;
  }
  function Form$render$lambda$lambda$lambda$lambda$lambda_7(this$Form) {
    return function (f) {
      setState(this$Form, Form$render$lambda$lambda$lambda$lambda$lambda$lambda_7);
      return Unit;
    };
  }
  function Form$render$lambda$lambda$lambda$lambda_5(this$Form) {
    return function ($receiver) {
      $receiver.num = '=';
      $receiver.buttonHandler = Form$render$lambda$lambda$lambda$lambda$lambda_7(this$Form);
      return Unit;
    };
  }
  Form.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Calculator');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_width($receiver_1, get_px(500));
    var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_2 = $receiver_0_1.css;
    set_minHeight($receiver_2, get_px(18));
    set_fontSize($receiver_2, get_px(16));
    set_padding($receiver_2, '10px');
    set_marginBottom($receiver_2, get_px(20));
    set_border($receiver_2, '1px solid grey');
    $receiver_0_1.unaryPlus_pdl1vz$(this.state.inputValue);
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new StyledDOMBuilder_init(styledDiv$lambda);
    set_display($receiver_0_2.css, Display.flex);
    var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_3 = $receiver_0_3.css;
    set_width($receiver_3, get_px(150));
    set_display($receiver_3, Display.flex);
    set_flexWrap($receiver_3, FlexWrap.wrap);
    set_marginRight($receiver_3, get_px(10));
    for (var i = 1; i <= 9; i++) {
      button($receiver_0_3, Form$render$lambda$lambda$lambda$lambda(i, this));
    }
    var $receiver_0_4 = new StyledDOMBuilder_init(styledDiv$lambda);
    set_marginLeft($receiver_0_4.css, get_px(50));
    button($receiver_0_4, Form$render$lambda$lambda$lambda$lambda$lambda_0(this));
    button($receiver_0_4, Form$render$lambda$lambda$lambda$lambda$lambda_1(this));
    $receiver_0_3.child_52psg1$($receiver_0_4.create());
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    var $receiver_0_5 = new StyledDOMBuilder_init(styledDiv$lambda);
    set_marginLeft($receiver_0_5.css, get_px(40));
    button($receiver_0_5, Form$render$lambda$lambda$lambda$lambda_0(this));
    button($receiver_0_5, Form$render$lambda$lambda$lambda$lambda_1(this));
    button($receiver_0_5, Form$render$lambda$lambda$lambda$lambda_2(this));
    button($receiver_0_5, Form$render$lambda$lambda$lambda$lambda_3(this));
    button($receiver_0_5, Form$render$lambda$lambda$lambda$lambda_4(this));
    button($receiver_0_5, Form$render$lambda$lambda$lambda$lambda_5(this));
    $receiver_0_2.child_52psg1$($receiver_0_5.create());
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  Form.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Form',
    interfaces: [RComponent]
  };
  function form$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function form($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(Form), form$lambda(handler));
  }
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function Result() {
    RComponent_init(this);
  }
  Result.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    set_border($receiver_0.css, '1px solid grey');
    $receiver_0.unaryPlus_pdl1vz$(this.state.value);
    $receiver.child_52psg1$($receiver_0.create());
  };
  Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: [RComponent]
  };
  _.resultFiller = resultFiller;
  _.App = App;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.Button = Button;
  _.button_6ex4c6$ = button;
  Object.defineProperty(_, 'value', {
    get: function () {
      return value;
    },
    set: function (value_0) {
      value = value_0;
    }
  });
  _.myToDouble_61zpoe$ = myToDouble;
  _.getResult_3fof2g$ = getResult;
  _.Form = Form;
  _.form_nq2vl0$ = form;
  _.main = main;
  _.Result = Result;
  value = null;
  main();
  Kotlin.defineModule('TODO_2', _);
  return _;
}));

//# sourceMappingURL=TODO_2.js.map
