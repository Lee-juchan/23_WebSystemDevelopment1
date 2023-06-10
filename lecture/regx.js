const target = "Gateway of last resort is not set\n\
C    201.38.90.0/24 is directly connected, Serial0/0\n\
R    201.38.91.0/24 [120/1] via 201.38.92.1, 00:00:18, Serial0/1\n\
                    [120/1] via 201.38.90.2, 00:00:17, Serial0/0\n\
C    201.38.92.0/24 is directly connected, Serial0/1\n\
C    201.38.100.0/24 is directly connected, FastEthernet0/0\n\
R    201.38.101.0/24 [120/1] via 201.38.90.2, 00:00:17, Serial0/0\n\
R    201.38.102.0/24 [120/1] via 201.38.92.1, 00:00:18, Serial0/1"

// ip 주소 찾기
const result = target.match(/[^0|\[](\d|\.)+\/\d+/g);
console.log(result);