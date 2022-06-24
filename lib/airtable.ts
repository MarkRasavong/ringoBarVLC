import Airtable from 'airtable'

export const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_RINGO_BAR_BASE as string)

export const tableData = async (tableName: string) => {
	const res = (await base(tableName).select().firstPage()).map(
		({ fields, id }) => ({ id, ...fields })
	)

	if (res) {
		localStorage.setItem(tableName, JSON.stringify(res))
		console.log(res)
	} else {
		alert('retriving data failed')
	}
}

/*
'bocadillos'
'dulces'
'cervezas'
'vinos'
'cócteles'
'bebidasXtras'
'desayunos'
'almuerzos'
'pastas y mas'
'promos'
*/
