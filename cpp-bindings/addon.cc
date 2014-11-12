// hello.cc
#include <node.h>
#include <v8.h>

using namespace v8;

/**
 * function Hello() {
 *   var hello = 'hello ';
 *   var arg = arguments[0];
 *   return hello + arg;
 * }
 */
Handle<Value> Hello(const Arguments& args) {
  HandleScope scope;

  Local<String> hello = String::New("hello ");
  Local<String> arg = args[0]->ToString();
  return scope.Close(String::Concat(hello, arg));
}

/**
 * function Square() {
 *  var a = arguments[0]
 *  var sq = a * a;
 *  return sq;
 * }
 */
Handle<Value> Square(const Arguments& args) {
 HandleScope scope;

 int a = args[0]->Int32Value();
 int sq = a * a;

 return scope.Close(Integer::New(sq));
}

/**
 * function Init(exports) {
 *   var hello = Hello;
 *   exports.hello = hello;
 * }
 */
void Init(Handle<Object> exports) {
  Local<Function> hello = FunctionTemplate::New(Hello)->GetFunction();
  exports->Set(String::NewSymbol("hello"), hello);

  Local<Function> square = FunctionTemplate::New(Square)->GetFunction();
  exports->Set(String::NewSymbol("square"), square);
}

/** 
 * NODE_MODULE is a macro defined at node.h
 * first argument is module name (the file created at compile time)
 */
NODE_MODULE(addon, Init)

