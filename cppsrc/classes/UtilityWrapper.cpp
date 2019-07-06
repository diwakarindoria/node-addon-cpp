#include "UtilityWrapper.h"

Napi::FunctionReference UtilityWrapper::constructor;

Napi::Object UtilityWrapper::Init(Napi::Env env, Napi::Object exports) {
  Napi::HandleScope scope(env);

  Napi::Function func = DefineClass(env, "UtilityWrapper", {
    InstanceMethod("factorial", &UtilityWrapper::Factorial),
    InstanceMethod("getValue", &UtilityWrapper::GetValue),
  });

  constructor = Napi::Persistent(func);
  constructor.SuppressDestruct();

  exports.Set("UtilityWrapper", func);
  return exports;
}

UtilityWrapper::UtilityWrapper(const Napi::CallbackInfo& info) : Napi::ObjectWrap<UtilityWrapper>(info)  {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

//   int length = info.Length();
//   if (length != 1 || !info[0].IsNumber()) {
//     Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
//   }

//   Napi::Number value = info[0].As<Napi::Number>();
  this->utilityClass_ = new UtilityClass();
}

Napi::Value UtilityWrapper::GetValue(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  long num = this->utilityClass_->getValue();
  return Napi::Number::New(env, num);
}

Napi::Value UtilityWrapper::Factorial(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  if (  info.Length() != 1 || !info[0].IsNumber()) {
    Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
  }

  Napi::Number num = info[0].As<Napi::Number>();
  long answer = this->utilityClass_->factorial(num.Int64Value());

  return Napi::Number::New(info.Env(), answer);
}