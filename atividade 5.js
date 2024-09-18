const networkInterfaces = {
    "Wi-Fi": [
      {
        "address": "fe80::1234:abcd:5678:ef90",
        "netmask": "ffff:ffff:ffff:ffff::",
        "family": "IPv6",
        "mac": "aa:bb:cc:dd:ee:ff",
        "internal": false,
        "cidr": "fe80::1234:abcd:5678:ef90/64",
        "scopeid": 14
      },
      {
        "address": "192.168.0.15",
        "netmask": "255.255.255.0",
        "family": "IPv4",
        "mac": "aa:bb:cc:dd:ee:ff",
        "internal": false,
        "cidr": "192.168.0.15/24"
      }
    ]
  };
  
  // Acessando o valor
  console.log(networkInterfaces["Wi-Fi"][0].family); // Saída: IPv6
  