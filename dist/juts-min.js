!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=$},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),t.default=new function(){var e=this;this.isNullOrUndefined=function(e){return null==e},this.inArray=function(e,t){return!(-1===t.indexOf(e))},this.isEmpty=function(e){return null==e||""===e||0===e},this.isDefined=function(e){return null!=e},this.getSquareBracketedFragmentByNumber=function(t,n){return e.getSquareBracketedFragments(t)[n]},this.getSquareBracketedFragments=function(e){var t=e.split("[");return t.forEach(function(e,t,n){n[t]=e.replace(/\]/g,"")}),t},this.checkForSubstring=function(e,t){return-1!==e.indexOf(t)},this.hello=function(){console.log("Hello JSWL! ;)")}}}]).default},function(e,t){e.exports=null},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),o=n.n(i);a.a.fn.incDataAttrCounter=function(e){var t=a()(this);if(t.isDataAttrEmpty(e))t.data(e,1..toString());else{var n=t.data(e);t.data(e,(Number(n)+1).toString())}},a.a.fn.nthParent=function(e){for(var t=a()(this);e-- >=0;)t=t.parent();return t},a.a.fn.cloneWithDataAttrs=function(){return a()(this).clone().off().unbindAllForChildren()},a.a.fn.getDataAttrCounter=function(e){var t=a()(this);if(t.isDataAttrEmpty(e))throw new Error("Counter is with name ",e,"undefined for : ",t," // use $.incDataAttrCounter() at least onse ");return t.data(e)},a.a.fn.isDataAttrEmpty=function(e){var t=a()(this).data(e);return o.a.isEmpty(t)},a.a.fn.isAttrEmpty=function(e){var t=a()(this).attr(e);return void 0===t||!1===t},a.a.fn.unbindAllForChildren=function(){var e=a()(this);return e.find("*").unbind(),e},a.a.fn.removeSmoothly=function(e){var t=a.a.extend({afterRemoveFinishedCallback:function(){},afterRemoveFinishedParams:{}},e);this.stop().animate({height:"0px",width:"0px",opacity:0},600,function(){a()(this).remove(),t.afterRemoveFinishedCallback(t.afterRemoveFinishedParams)})},a.a.fn.scrollMeTo=function(e){a()(this).animate({scrollTop:e.offset().top},600)},a.a.fn.removeSelect2Span=function(){var e=a()(this);return e.next("span.select2-container").remove(),e},a.a.fn.select2GetSpan=function(){return a()(this).next("span.select2-container")},a.a.fn.select2SetError=function(e){var t=a()(this),n=a.a.extend({"border-color":"red","border-style":"solid"},e);t.select2GetSpan().css(n)},a.a.fn.formFirstInput=function(e){var t=a()(this);o.a.isEmpty(e)&&(e="");var n=":input"+e+":first";return t.find("*").filter(n)},a.a.fn.outerHTML=function(){return a()(this)[0].outerHTML},a.a.fn.getAttrFragment=function(e){var t=a()(this),n=a.a.extend({attributeName:"name",fragmentNumber:0},e),r=t.attr(n.attributeName);return o.a.getSquareBracketedFragmentByNumber(r,n.fragmentNumber)},a.a.fn.getNameFragment=function(e){return a()(this).getAttrFragment({attributeName:"name",fragmentNumber:e})};n(2);a.a.fn.scrollToMe=function(e){var t=a()(this);(o.a.isEmpty(e)?a.a.browser.mozilla?a()("html"):a()("body"):"&get-scroll-parent&"===e?t.scrollParent():a()(e)).scrollMeTo(t)},a.a.fn.renewUniqueId=function(){var e=a()(this);return e.removeUniqueId().uniqueId(),e},a.a.fn.renewUniqueIdsForChildren=function(){var e=a()(this);return e.find("*").removeAttr("id").renewUniqueId(),e};var l=function(){};l._storageData={},l.checkAndAddIfNeed=function(e,t){o.a.isNullOrUndefined(l._storageData[t])&&(l._storageData[t]=[]);var n=!0;return o.a.inArray(e,l._storageData[t])||(l._storageData[t].push(e),n=!1),n};var c=l;a.a.fn.parentCloser=function(e){var t=a.a.extend({parentLevel:0,parentContainerLevel:1,containerCallback:function(e){}},e),n="";return a()(this).uniqueId(),this.each(function(){n=a()(this).attr("id"),c.checkAndAddIfNeed(n,"parentCloser")||a()("#"+n).__deleteParentByLevelForUnique(t)})},a.a.fn.__deleteParentByLevelForUnique=function(e){var t=a.a.extend({parentLevel:0,parentContainerLevel:1,containerCallback:function(e){}},e);a()(this);this.click(function(){var e=a()(this),n=e.nthParent(t.parentLevel),r=e.nthParent(t.parentContainerLevel);return n.removeSmoothly({afterRemoveFinishedCallback:t.containerCallback,afterRemoveFinishedParams:r}),!1})},a.a.fn.replaceInChildrenAttrsUsingTemplatesFromDataFileds=function(e){var t=a()(this),n=a.a.extend({searchRegexp:/%fileds_group_number_lavel2%/g,newValue:"888",attributeNames:["name","for"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return!1}},e);return t.find("*").each(function(){a()(this).replaceInAttrsUsingTemplatesFromDataFileds(n)}),t},a.a.fn.replaceInAttrsUsingTemplatesFromDataFileds=function(e){var t=a()(this),n=a.a.extend({searchRegexp:/%fileds_group_number_lavel2%/g,newValue:"888",attributeNames:["name","for"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return!1}},e),r="",i="";return n.attributeNames.forEach(function(e,a,l){if(r=t.attr("data-"+e+n.templateDataFieldAdditionalPart),!o.a.isEmpty(r)){if(i=r.replace(n.searchRegexp,n.newValue),"name"===e&&n.copyValuesInsteadOtherPlaceholders){var c=t.attr(e);o.a.getSquareBracketedFragments(i).forEach(function(e,t,r){if(n.checkNameFragmentIsPlaceholderCallback(e)&&!o.a.isEmpty(c)){var a=o.a.getSquareBracketedFragmentByNumber(c,t);o.a.isEmpty(a)||(i=i.replace(e,a))}})}t.attr(e,i)}}),t},a.a.fn.replaceInAttrs=function(e,t,n){var r=a()(this),i="";return n.forEach(function(n,a,o){i=r.attr(n),r.attr(n,i.replace(e,t))}),r},a.a.fn.fromFiledsGroupAdderFromHiddenTemplate=function(e){var t=a()(this),n=a.a.extend({addSelector:"#add-group",deleteSelector:".delete-group",templateContainerSelector:"#template-container",filedsGroupSelector:".template-selector",replaceGroupNumerRegexp:/%fileds_group_number%/g,parentLevelForDelete:0,filedGroupsCounterInitValue:0,afterAddCallback:function(e){}},e),r=n.addSelector,i=n.deleteSelector,o=t,l=a()(n.templateContainerSelector),c=n.filedsGroupSelector,u=n.replaceGroupNumerRegexp;this.initAddtionalAfterNewFiledsAdding=n.afterAddCallback;var s=n.filedGroupsCounterInitValue,d=this;s+=o.find(c).length,this.initAddProcess=function(){a()(r).off("click"),a()(r).on("click",function(e){return d.addNewFiledsGroup(),d.initDeleteProcess(),d.initAddtionalAfterNewFiledsAdding(),!1})},this.initDeleteProcess=function(){a()(i).on("click",function(){var e=a()(this).nthParent(n.parentLevelForDelete);return d.removeFiledsGroup(e),!1})},this.removeFiledsGroup=function(e){e.stop().animate({height:"0px",width:"0px",opacity:0},600,function(){a()(this).remove()})},this.addNewFiledsGroup=function(){var e=a()(l.html().replace(u,s));return e.find("*").removeAttr("id"),e.appendTo(o).show("slow"),s++,!1},d.initAddProcess(),d.initDeleteProcess()},a.a.fn.parentInParentContainerDublicator=function(e){a()(this);var t=a.a.extend({thisSelector:"",containerParentLevel:1,parentLevel:0,replaceRegexp:/%fields_group_number_2%/g,afterCloneCallback:function(e){},attributesToReplaceFromTemplate:["name","for","class"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return o.a.checkForSubstring(e,"%")},containerCallback:function(e){}},e);a()(this).uniqueId();var n="";return this.each(function(){n=a()(this).attr("id"),c.checkAndAddIfNeed(n,"parentInParentContainerDublicator")||a()("#"+n).__relativeParentInParentContainerDublicatorForUnique(t)})},a.a.fn.__relativeParentInParentContainerDublicatorForUnique=function(e){a()(this);var t=a.a.extend({thisSelector:"",containerParentLevel:1,parentLevel:0,replaceRegexp:/%fields_group_number_2%/g,afterCloneCallback:function(e){},attributesToReplaceFromTemplate:["name","for","class"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return!1},containerCallback:function(e){}},e),n=t.thisSelector,r=a()(this),i=r.nthParent(t.containerParentLevel),o=r.nthParent(t.parentLevel);i.incDataAttrCounter(t.thisSelector),this.click(function(){var e=o.cloneWithDataAttrs();return e.hide(),e.find("*").removeAttr("id"),e.replaceInChildrenAttrsUsingTemplatesFromDataFileds({searchRegexp:t.replaceRegexp,newValue:i.getDataAttrCounter(t.thisSelector),attributeNames:t.attributesToReplaceFromTemplate,templateDataFieldAdditionalPart:t.templateDataFieldAdditionalPart,copyValuesInsteadOtherPlaceholders:t.copyValuesInsteadOtherPlaceholders,checkNameFragmentIsPlaceholderCallback:t.checkNameFragmentIsPlaceholderCallback}),e.find("input").val(""),i.append(e),t.afterCloneCallback(e),t.containerCallback(i),e.show("slow"),e.find(n).parentInParentContainerDublicator(t),!1})}}]);
//# sourceMappingURL=juts-min.js.map