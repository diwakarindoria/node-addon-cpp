#include "UtilityClass.h"
#include "iostream"

UtilityClass::UtilityClass()
{
    this->value_ = 0;
}

long UtilityClass::getValue()
{
    return this->value_;
}

void UtilityClass::setValue(long num)
{
    this->value_ = num;
}

long UtilityClass::factorial(long num)
{
    unsigned long factorialVal = 1;

    for (int i = 1; i <= num; i++)
    {
        factorialVal *= i;
    }
    this->value_ = factorialVal;
    return this->value_;
}