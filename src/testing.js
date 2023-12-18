const { createClient } = require('@supabase/supabase-js')

const fetchData = async () => {
  const supabase = createClient('https://ireumvmoybitxftsqlgh.supabase.co/', process.env.SUPABASE_KEY)
  const { data, error } = await supabase
    .from('sakuga')
    .select('*')
  return data
}

const newData = fetchData().then((data) => {
  console.log(data)
})

module.exports = newData
