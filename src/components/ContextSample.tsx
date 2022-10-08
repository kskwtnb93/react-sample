import React from 'react';

// Titleを渡すためのContextを作成します
const TitleContext = React.createContext('')

// Titleコンポーネントの中でContextの値を参照します
const Title = () => {
	// Consumer を使って、Contextの値を参照します
	return (
		<TitleContext.Consumer>
			{/* Consumer直下に関数を置いて、Contextの値を参照します */}
			{(title) => {
				return <h1>{ title }</h1>
			}}
		</TitleContext.Consumer>
	)
}

const Header = () => {
	return (
		<header>
			{/* HeaderからTitleへは何もデータを渡しません */}
			<Title />
		</header>
	)
}

const Page = () => {
	const title = 'React Book'

	// Provider を使い Context に値をセットします。
	// Provider 以下のコンポーネントから値を参照できます。
	return (
		<TitleContext.Provider value={title}>
			<Header />
		</TitleContext.Provider>
	)
}

export default Page