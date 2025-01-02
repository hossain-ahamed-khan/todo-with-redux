import { Button } from '@/components/ui/button'
import { decrement, increment, incrementByAmount } from '@/redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export function Counter() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <Button onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <Button onClick={() => dispatch(incrementByAmount(10))}>
                    Increment by 10
                </Button>
                <div>{count}</div>
                <Button onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </div>
        </div>
    )
}