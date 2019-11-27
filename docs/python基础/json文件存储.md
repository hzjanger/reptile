# json文件存储

## 从文件中读取数据

```python
import json

with open('jsonData.json', 'r') as file:
    string = file.read()
    data = json.loads(string)
    print(data)
    print(type(data))
```

jsonData.json中的数据

```json
{
  "imgUrl": "https://p0.meituan.net/movie/c304c687e287c7c2f9e22cf78257872d277201.jpg@160w_220h_1e_1c",
  "name": "龙猫",
  "star": "秦岚,糸井重里,岛本须美",
  "releaseTime": "2018-12-14",
  "score": "9.1"
}
```

## 将数据存储到文件中

```python
import json

data = [
    {
        "imgUrl": "https://p0.meituan.net/movie/c304c687e287c7c2f9e22cf78257872d277201.jpg@160w_220h_1e_1c",
        "name": "龙猫",
        "star": "秦岚,糸井重里,岛本须美",
        "releaseTime": "2018-12-14",
        "score": "9.1"
    }
]

with open('jsonData.json', 'w') as file:
    file.write(json.dumps(data))
```

中文会变为Unicode字符,并且在一行显示,显示形式不是特别友好

解决方法

- 指定参数 ensure ascii 为 False ，另外还要规定文件输出的编码

- 指定参数 indent ，代表缩进字符个数

```python
with open('jsonData.json', 'w') as file:
    file.write(json.dumps(data))
```
