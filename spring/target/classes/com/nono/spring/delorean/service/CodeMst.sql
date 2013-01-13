select TranType, PostType, DrCr, Entity , ProdType, CCY, ActBch, ActNumSri, ActSuf, PrdCode
from test.CodeMst
where ActiveFlg != 2 and TranType = 11 and PostType = 2