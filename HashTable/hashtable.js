class HashTable{
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        // this.table[index] = value

        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        // return this.table[index]

        let bucket = this.table[index]

        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return sameKey[1]
            }else{
                return undefined
            }
        }
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = null
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)

table.set('name','sarath')
table.set('mane','dinson')
table.set('kk','jlkjlk')

console.log(table.get('mane'))

// console.log(table.get('dinson'))
// console.log(table[3])

// table.display()