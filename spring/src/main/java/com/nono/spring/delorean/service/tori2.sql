select c.Uke_D as BaseDate,
	1 as SubNum,
	c.TranType as TranType,
	c.PostType as PostType,
	case when c.ActiveFlg = 1 then DDACCRU.DFACB else c.ActBch end as ActBch, 
	case when c.ActiveFlg = 1 then DDACCRU.DFACS else c.ActNumSri end as ActNumSri, 
	case when c.ActiveFlg = 1 then DDACCRU.DFACX else c.ActSuf end as ActSuf, 
	c.DrCr as DrCr,
	c.ProdType as ProdType,
	c.LCYAmt as LCYAmt
from(
	select a.BtnCD, a.ActNo, a.ToriKbn, a.Uke_D, 	
	case when b.PostType = 2 then a.SeiKin
		when b.PostType = 3 then a.SyoZei
		when b.PostType = 4 then a.JyuZei end as LCYAmt,	
	b.TranType, b.PostType, b.DrCr, b.Entity, b.ProdType, b.CCY, b.ActBch, b.ActNumSri,	
	b.ActSuf,  b.PrdCode, b.ActiveFlg	
	from (
		SELECT BTNCD, ACTNO, ToriKbn, Uke_D, SEIKIN, SyoZei, JyuZei
	  	FROM `test`.`tori`
	  	WHERE UKE_D = DATE('20121018') and (ToriKbn = 2 or ToriKbn = 3)
	  	) as a	
	cross join  (	  
	 	select TranType, PostType, DrCr, Entity , ProdType, CCY, ActBch, 
	 	ActNumSri, ActSuf, PrdCode, ActiveFlg
		from test.CodeMst
		where ActiveFlg != 2 and TranType = 11
		) as b
) as c, DDACCRU
where c.LCYAmt != 0 and DDACCRU.DFACB = c.BtnCD and c.ActNo = DDACCRU.DFACS
and DDACCRU.DFCYCD = c.CCY and DDACCRU.DFAPTY = 'SSR'




select c.Uke_D as BaseDate,  1 as SubNum, c.TranType as TranType, c.PostType as PostType, case when c.ActiveFlg = 1 then DDACCRU.DFACB else c.ActBch end as ActBch, case when c.ActiveFlg = 1 then DDACCRU.DFACS else c.ActNumSri end as ActNumSri, case when c.ActiveFlg = 1 then DDACCRU.DFACX else c.ActSuf end as ActSuf,  c.DrCr as DrCr, c.PrdCode as ProdCode, c.LCYAmt as LCYAmt from ( select a.BtnCD, a.ActNo, a.ToriKbn, a.Uke_D, case when b.PostType = 2 then a.SeiKin when b.PostType = 3 then a.SyoZei when b.PostType = 4 then a.JyuZei end as LCYAmt, b.TranType, b.PostType, b.DrCr, b.Entity, b.CCY, b.ActBch, b.ActNumSri, b.ActSuf,  b.PrdCode, b.ActiveFlg from ( SELECT BTNCD, ACTNO, ToriKbn, Uke_D, SEIKIN, SyoZei, JyuZei FROM `test`.`tori` WHERE UKE_D = DATE('20121018') and (ToriKbn = 2 or ToriKbn = 3) ) as a cross join  ( select TranType, PostType, DrCr, Entity , ProdType, CCY, ActBch,  ActNumSri, ActSuf, PrdCode, ActiveFlg from test.CodeMst where ActiveFlg != 2 and TranType = 11 ) as b ) as c, DDACCRU where c.LCYAmt != 0 and DDACCRU.DFACB = c.BtnCD and c.ActNo = DDACCRU.DFACS and DDACCRU.DFCYCD = c.CCY and DDACCRU.DFAPTY = 'SSR'
	