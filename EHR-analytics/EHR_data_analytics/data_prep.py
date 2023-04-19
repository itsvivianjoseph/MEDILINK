import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import matplotlib as mpl
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import LabelEncoder
from sklearn import preprocessing
import warnings
import pickle
warnings.filterwarnings("ignore")


def import_data(file):
    df = pd.read_csv(file, parse_dates=True, keep_date_col=True)
    return df



def impute_missing(df):

    df=df[df.columns].fillna(df[df.columns].median())
    return(df)


def check_plausible(df):

    for column in df:
        df[column] = df[column].mask(~(df[column] >= plausible_values[column][0]) & (df[column] <=  plausible_values[column][1]) , df[column].median())
    return(df)

def capitalization_fix(df, to_encode):

    for c in to_encode:
        df[c] = df[c].str.lower()
    return(df)


def One_hot_encode(df,col_list):

    df_to_encode = pd.get_dummies(df[col_list])
    df = pd.concat([df,df_to_encode], axis=1)
    df= df.drop(col_list, axis =1)
    return(df)

def Label_encode(df, col):
        
        df[col] = df[col].astype(str)
        df[col] = LabelEncoder().fit_transform(df[col])
        return(df)


def diagnosis_codes_encode(df):
   
    diagnosis_cols = pd.get_dummies(df['Diagnosis code']).add_prefix('Diagnosis code: ')
    df = pd.concat([df, diagnosis_cols ], axis=1)
    df= df.drop('Diagnosis code', axis =1)
    return(df)

def group_age(df):
    
        df['age_by_range'] = pd.cut(x=df['Age'], bins=[16, 45, 60,99],labels= ['16-45', '46-60', '60+'])
        return(df)

def add_clincial_indicators(df):
   
    sysbp = (df.Systolic_blood_pressure_min+ df.Systolic_blood_pressure_max)/2
    diastolic = (df.Diastolic_blood_pressure_max + df.Diastolic_blood_pressure_min)/2

    df['cardiac_output']= heart_rate* (sysbp-diastolic)
    df['stroke volume']= (sysbp-diastolic)
    df['bsa']= np.sqrt((df.Height*df.Weight/3600))
    df['stroke index']= df['stroke volume']/df['bsa']

    return(df)



def export_data(df):

    df.to_pickle("prepared.pkl")
    return(df)
