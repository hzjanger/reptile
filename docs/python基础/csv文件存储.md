# csv文件存储

## 数据写入

### 数组写入

```python
import csv

with open('csvData.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(['id', 'name', 'age'])
    writer.writerow(['1001', 'h', 22])
    writer.writerow(['1002', 'z', 23])
    writer.writerow(['1003', 'j', '24'])
```

### 对象写入

```python
import csv

with open('csvData.csv', 'w') as file:
    fieldNames = ['id', 'name', 'age']
    writer = csv.DictWriter(file, fieldnames=fieldNames)
    writer.writeheader()
    writer.writerow({'id': '1001', 'name': 'h', 'age': 22})
    writer.writerow({'id': '1002', 'name': 'z', 'age': 23})
    writer.writerow({'id': '1003', 'name': 'j', 'age': 24})
```

追加内容,并指定写入的字符编码

```python
with open('csvData.csv', 'a', encoding='utf-8') as file:
    fieldNames = ['id', 'name', 'age']
    writer = csv.DictWriter(file, fieldnames=fieldNames)
    writer.writerow({'id': '1004', 'name': '李四', 'age': 3})
```

## 数据读取

```python
with open('csvData.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```
