from math import gcd
from functools import reduce

def lcm(a, b):
    return a * b // gcd(a, b)

def solution(arr):
    return reduce(lcm, arr)