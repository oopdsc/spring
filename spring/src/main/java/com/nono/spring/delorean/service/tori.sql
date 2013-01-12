select a.BtnCD, a.ActNo, a.ToriKbn, a.Uke_D, a.AMT, 
b.TranType, b.PostType, b.DrCr, b.Entity, b.ProdType, b.CCY, b.ActBch, b.ActNumSri,
case when isnull(b.ActSuf) then a.DFACX else b.ActSuf end as SUFFIX,  b.PrdCode as realCode

from (

SELECT BTNCD, ACTNO, ToriKbn, Uke_D, SEIKIN AS AMT, DFACX,
  FROM `test`.`tori`, test.DDACCRU
  WHERE UKE_D = DATE('20121018') and SeiKin <> 0 
  
  ) as a

  
  cross join
  (
  
  select TranType, PostType, DrCr, Entity , ProdType, CCY, ActBch, ActNumSri, ActSuf, PrdCode
from test.CodeMst
where ActiveFlg = 0 and TranType = 11 and PostType = 2  

union all

select TranType, PostType, DrCr, Entity , ProdType, CCY, DDACCRU.DFACB as ActBch, 
 DDACCRU.DFACS as ActNumSri, DDACCRU.DFACX as ActSuf, PrdCode
from test.CodeMst, test.DDACCRU
where ActiveFlg = 1 and TranType = 11 and PostType = 2  
and test.DDACCRU.DFCYCD = CodeMst.CCY and DDACCRU.DFAPTY = 'SSR'

) as b
