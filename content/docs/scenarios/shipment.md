# Shipment

## Сценарий поставки товара \(создание сделки и изменение ее состояния\)

![](https://lh3.googleusercontent.com/nineR3BekCaj370-7BV6L8DfUwnLEn3dlhPwCismMFYzNuJkOTTijbhQ3lqhw1IiXFwZKmUct-mBIX1pyZRPYih8yPu6-I4qFuNP8L6hexBHLXkIwxBbFUkcl8xjuc_wCZ0lYpBu)

Данный сценарий проводится в кластере Private Ethereum \(PrivEth\).

Сценарий демонстрирует распространение сделки по узлам и переключение статуса сделки.

Используется предустановленный смарт-контракт с типом сделки FirstDeal \(без карты переходов\).  
Участники сделки:

Seller - узел PrivEth-1

Buyer   узел PrivEth-2  


* На узле PrivEth-1 создается сделка с атрибутами DocNumber=123, DocDate=2020-01-01, DocSumma=100
* Убеждаемся в приходе сделки на узлы PrivEth-1, PrivEth-2 и ее отсутствии на  узле PrivEth-3
* На узле PrivEth-1 переключаем статус сделки в Shipped
* Убеждаемся в приходе изменения сделки на узлы PrivEth-1, PrivEth-2
* На узле PrivEth-2 переключаем статус сделки в Accepted, добавляем атрибут PaymentDate=2020-01-02 и изменяем атрибут DocSumma=102
* Убеждаемся в приходе изменения сделки на узлы PrivEth-1, PrivEth-2
* На узле PrivEth-1 переключаем статус сделки в Closed
* Убеждаемся в приходе изменения сделки на узлы PrivEth-1, PrivEth-2, а также в том, что на узле PrivEth-3 сделки нет.

Для кластера Public Ethereum \(PubEth\) можно использовать тот же сценарий, но с другим списком участников:

Участники сделки:

Seller - узел PubEth-1

Buyer - узел PubEth-2

сделать бизнес- сценарий\(продавец-покупатель, отгружено-принято\)  


