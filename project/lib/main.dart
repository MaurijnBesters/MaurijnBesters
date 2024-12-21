import 'package:flutter/material.dart';
import 'package:sense_wysiwyg/editor/editor.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter widget builder Demo',
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: Material(
        child: const Editor(),
      ),
    );
  }
}
