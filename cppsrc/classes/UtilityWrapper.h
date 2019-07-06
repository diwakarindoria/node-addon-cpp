#include <napi.h>
#include "UtilityClass.h"

class UtilityWrapper : public Napi::ObjectWrap<UtilityWrapper>
{
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports); //Init function for setting the export key to JS
    UtilityWrapper(const Napi::CallbackInfo &info);                  //Constructor to initialise

private:
    static Napi::FunctionReference constructor;           //reference to store the class definition that needs to be exported to JS
    Napi::Value GetValue(const Napi::CallbackInfo &info); //wrapped getValue function
    Napi::Value SetValue(const Napi::CallbackInfo &info);      //wrapped add function
    Napi::Value Factorial(const Napi::CallbackInfo &info);      //wrapped factorial function
    UtilityClass *utilityClass_;                            //internal instance of utilityclass used to perform actual operations.
};