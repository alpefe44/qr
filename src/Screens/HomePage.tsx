import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Button, Text, View } from 'react-native';

const MyComponent = () => {
    const flatListRef = useRef(null);  // FlatList referansı
    const [index, setIndex] = useState<number>(0)


    const data = Array.from({ length: 50 }, (_, i) => ({ key: i.toString(), name: `Item ${i}` }));

    const scrollToIndex = (index) => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index });
        }
    };


    const deneme = () => {
        console.log(index, "önceki")
        setIndex((prev) => index < data.length - 1 ? prev + 1 : 0)
    }

    useEffect(() => {
        console.log(index, "sonraki");  // Güncellenmiş yeni index değeri
    }, [index]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ref={flatListRef}  // Referansı FlatList'e atıyoruz
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <View style={{ padding: 20 }}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
            <Button title="Scroll to index 10" onPress={() => { deneme(), scrollToIndex(index) }} />
        </View>
    );
};

export default MyComponent;
