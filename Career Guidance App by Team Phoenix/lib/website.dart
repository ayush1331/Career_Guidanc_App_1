import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class MyWebsite extends StatefulWidget {
  const MyWebsite({Key? key}) : super(key: key);

  @override
  State<MyWebsite> createState() => _MyWebsiteState();
}

class _MyWebsiteState extends State<MyWebsite> {

  double _progress = 0;
  late InAppWebViewController  inAppWebViewController;

  @override

  void initState() {
    super.initState();
  }
  Widget build(BuildContext context) {
    return WillPopScope(
        onWillPop: ()async{

          var isLastPage = await inAppWebViewController.canGoBack();

          if(isLastPage){
            inAppWebViewController.goBack();
            return false;
          }

          return true;
        },
        child: SafeArea(
            child: Scaffold(
              body: Stack(
                children: [
                  InAppWebView(
                    initialUrlRequest: URLRequest(
                        url: Uri.parse("http://erp.invertisuniversity.ac.in:81/loginForm.aspx")
                    ),
                    initialOptions: InAppWebViewGroupOptions(
                      crossPlatform: InAppWebViewOptions(
                        javaScriptEnabled: true, // Enable JavaScript
                      ),
                    ),
                    onWebViewCreated: (InAppWebViewController controller){
                      inAppWebViewController = controller;
                    },
                    onProgressChanged: (InAppWebViewController controller , int progress){
                      setState(() {
                        _progress = progress / 100;
                      });
                    },
                  ),
                  _progress < 1 ? Container(
                    child: LinearProgressIndicator(
                      value: _progress,
                    ),
                  ):SizedBox()
                ],
              ),
            ),
            ),
        );
    }
}