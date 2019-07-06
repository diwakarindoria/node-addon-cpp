#include <napi.h>
#include "classes/UtilityWrapper.h";

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
    return UtilityWrapper::Init(env, exports);
}

NODE_API_MODULE(nodetest, InitAll)

// NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll);