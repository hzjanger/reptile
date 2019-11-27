# json和对象的转换

可以调用`JSON`库中的`loads`方法将`JSON文本字符串`转为`JSON对象`,可以通过`dumps`方法将`JSON对象`转为文本字符串

## json字符串转对象

使用json的loads方法

```python
import json

string = '''
[
{"name": "bob", "gender": "male", "birthday": "1992-10-18"},
{"name": "Selina", "gender": "female", "birthday": "1995-10-18 "}
]
'''

print(type(string))
data = json.loads(string)
print(type(data))
print(data)

```

::: tip
需要注意的是不能使用单引号
:::

## 对象转json字符串


