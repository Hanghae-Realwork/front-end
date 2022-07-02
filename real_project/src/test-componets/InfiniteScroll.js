import React, { useState, useEffect, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import axios from "axios"

const InfiniteScroll = () => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const [ref, inView] = useInView()
    const getItems = useCallback(async () => {
        setLoading(true)
        await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
        .then((res) => {
            console.log(res)
            setItems(items.concat(res))
            
        })
        setLoading(false)
    }, [page])


    // `getItems` 가 바뀔 때 마다 함수 실행
    useEffect(() => {
        getItems()
    }, [getItems])

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage(prevState => prevState + 1)
        }
    }, [inView, loading])

    return (
        <div className="list">
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    {items.length - 1 == idx ? (
                        <div className="list-data" ref={ref}>
                            Element {inView.toString()}
                            {item.content}
                        </div>
                    ) : (
                        <div className="list-data">
                            
                            {item.content}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default InfiniteScroll;