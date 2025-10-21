import * as Vue from "vue";
import { ref } from "vue";
import SampleComponent from "./SampleComponent.vue"; //第５章追記
// import { combine } from "laravel-mix";

const application = {
    setup(){
        //コンソール内にログを残す方法
        // console.log("vue initialized.");
        // return {};

        /*binding（バインディング）　
        変数と表示内容や処理実行を結びつけること*/
        
        /*ページの反映（Vue ４章）
         const page = ref(1);　
         .vueファイルを作ったため削除 */

        ///ひらがなチェック用
        const name = ref("");
        const validateResult = ref("");

        //titleに文字反映
        const title = ref("vue test title");

        //ボタンクリックでtitle文字変更
        let buttonClick = function(){
            title.value = "value update.";
        };

        //ひらがなチェック
        let validate = function(){
            let isKana = name.value.match(/^[ぁ-んー　]*$/);
            validateResult.value = isKana ? "正常" : "ひらがな以外が入力されています。";
        };
        return{
            title,
            buttonClick,

            name,
            validateResult,
            validate,

            // page,　第５章にて.vueファイルを作っため削除
        };
    },
    
    //追記（第５章）
    components : {
        "sample-component" : SampleComponent,
    }

};



try {
    let mainElement = document.getElementsByTagName("main")[0];
    Vue.createApp(application).mount(mainElement);
} catch (e){}