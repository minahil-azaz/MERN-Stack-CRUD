

const read =(req,res) =>{
    res.status(200).json({
        message:"post requested"
    })
};

const create =(req,res) =>{
    res.status(200).json({
        message:"create requested"
    })
};

const update =(req,res) =>{
    res.status(200).json({
        message:"update requested"
    })
};

const remove =(req,res) =>{
    res.status(200).json({
        message:"remove requested"
    })
};

module.exports = {
    read,
    create,
    update,
    remove
}
