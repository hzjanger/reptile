# requests库的使用

## 安装requests库

```bash
pip install requests
```

## 基本用法

```python
import requests

data = {
    'name': 'germey',
    'age': 22
}
# 发起一个get请求
response = requests.get("http://httpbin.org/get", params=data)
# 将json字符串转为字典
jsonData = response.json()
# 取出里面的数据
print(jsonData['args'])
```

::: tip
`response = requests.get("http://httpbin.org/get", params=data)`等同于`response = requests.get("http://httpbin.org/get?name=germey&age=22")`
:::
