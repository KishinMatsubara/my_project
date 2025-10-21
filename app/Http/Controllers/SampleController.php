<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class TopController extends Controller {
    public function index( Request $request ) {
        $sampleValue = "sample テキストです。"; // 追加
        return view("sample/index" , [ "sampleValue" => $sampleValue ]); // 変更
    }
}