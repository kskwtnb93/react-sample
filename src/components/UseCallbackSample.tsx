import React, { useState, useCallback } from 'react'

type ButtonProps = {
	onClick: () => void
}

// DecrementButton は通常の関数コンポーネントでボタンを表示する
const DecrimentButton = (props: ButtonProps) => {
	const { onClick } = props

	console.log('DecrementButton が再描画されました')

	return <button onClick={onClick}>Decriment</button>
}

// IncrementButtonはメモ化した関数コンポーネントで」ボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
	const { onClick } = props

	console.log('IncrementButton が再描画されました')

	return <button onClick={onClick}>Increment</button>
})

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
	const { onClick } = props

	console.log('DoubleBUtton が再描画されました')

	return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
	const [count, setCount] = useState(0)

	const decrement = () => {
		setCount( (c) => c - 1 )
	}

	const increment = () => {
		setCount( (c) => c + 1 )
	}

	// useCallbackを使って関数をmemo化する
	const double = useCallback(() => {
		setCount( (c) => c * 2 )
		// 第二引数は空配列なので、useCallbackは常に同じ関数を返す
	}, [])

	return (
		<div>
			<p>Count: { count }</p>
			{/* コンポーネントに関数を返す */}
			<DecrimentButton onClick={decrement} />
			{/* メモ化コンポーネントに関数を渡す */}
			<IncrementButton onClick={increment} />
			{/* メモ化コンポーネントにメモ化した関数を渡す */}
			<DoubleButton onClick={double} />
		</div>
	)
}