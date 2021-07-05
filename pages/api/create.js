// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const exec = require('child-process-promise').exec
const create_vm = (os, name) => {
  // const cmd = 'ls'
  let original = os === 'windows' ? 'guest-windows' : 'guest-linux'
  const cmd = `virt-clone --original=${original} --name=${name} --auto-clone`
  return exec(cmd)
}

const update_vm = (name, ip, ram, cpu) => {
  const cmd =
    `virsh setvcpus ${name} ${cpu} --config --maximum &&` +
    ` virsh setvcpus ${name} ${cpu} --config &&` +
    ` virsh setmaxmem ${name} ${Number(ram) * 1024}  --config &&` +
    ` virsh setmem ${name} ${Number(ram) * 1024}  --config`
  return exec(cmd)
}

const validateInputs = () => {
  return true
}

export default async function handler(req, res) {
  const request = req.body
  console.log('criando')
  try {
    await create_vm(request.os, request.name)
    await update_vm(request.name, 'ip', request.ram, request.cpu)
    console.log('sucesso')
    res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error })
  }
}
