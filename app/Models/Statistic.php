<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;

    protected $table = "stats";
    protected $guarded = [];
    protected $hidden = ['id', 'created_at', 'updated_at'];
    protected $appends = [
        'under_treatment',
        'cumulative_positive',
        'cumulative_negative',
        'cumulative_recovered',
        'cumulative_death',
        'new_under_treatment',
        'active_ODP',
        'cumulative_finished_ODP',
        'cumulative_ODP',
        'active_PDP',
        'cumulative_finished_PDP',
        'cumulative_PDP',
        'death_percentage',
        'recovered_percentage',
        'under_treatment_percentage',
        'daily_positive_case',
        'daily_recovered_case',
        'daily_death_case',
    ];
    protected $casts = [
        'day' => 'integer',
        'positive' => 'integer',
        'negative' => 'integer',
        'death' => 'integer',
        'recovered' => 'integer',
    ];

    public function histories()
    {
        return $this->hasMany(LocalCaseHistory::class, 'day', 'day');
    }

    public function getDeathPercentageAttribute()
    {
        return percentageValue($this->cumulative_positive, $this->cumulative_death);
    }

    public function getDayAttribute($value)
    {
        return (int) $value;
    }

    public function getDateAttribute($value)
    {
        $date = strtotime($value);
        $newDate = Carbon::parse($date);
        $newDate->setTimezone('Asia/Makassar');

        return $newDate->format('d M Y');
    }

    public function getUnderTreatmentAttribute()
    {
        return ($this->cumulative_positive > 0) ? $this->cumulative_positive - ($this->cumulative_recovered + $this->cumulative_death) : 0;
    }

    public function getActiveODPAttribute()
    {
        return $this->cumulative_ODP - $this->cumulative_finished_ODP;
    }

    public function getActivePDPAttribute()
    {
        return $this->cumulative_PDP - $this->cumulative_finished_PDP;
    }

    public function getCumulativePositiveAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('positive');

            return $this->positive + $stat;
        } else {
            return $this->positive;
        }
    }

    public function getNewUnderTreatmentAttribute()
    {
        return $this->day > 1 ? $this->under_treatment - Statistic::where('day', $this->day - 1)->first()->under_treatment : 0;
    }

    public function getCumulativeRecoveredAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('recovered');

            return $this->recovered + $stat;
        } else {
            return $this->recovered;
        }
    }

    public function getCumulativeDeathAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('death');

            return $this->death + $stat;
        } else {
            return $this->death;
        }
    }

    public function getCumulativeNegativeAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('negative');

            return $this->negative + $stat;
        } else {
            return $this->negative;
        }
    }

    public function getCumulativeODPAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('new_ODP');

            return $this->new_ODP + $stat;
        } else {
            return $this->new_ODP;
        }
    }

    public function getCumulativePDPAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('new_PDP');

            return $this->new_PDP + $stat;
        } else {
            return $this->new_PDP;
        }
    }

    public function getCumulativeFinishedPDPAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('finished_PDP');

            return $this->finished_PDP + $stat;
        } else {
            return $this->finished_PDP;
        }
    }

    public function getCumulativeFinishedODPAttribute()
    {
        if ($this->id > 1) {
            $stat = Statistic::whereBetween('id', [1, $this->id - 1])->sum('finished_ODP');

            return $this->finished_ODP + $stat;
        } else {
            return $this->finished_ODP;
        }
    }

    public function getRecoveredPercentageAttribute()
    {
        return percentageValue($this->cumulative_positive, $this->cumulative_recovered);
    }

    public function getUnderTreatmentPercentageAttribute()
    {
        $underTreatment = ($this->cumulative_positive - ($this->cumulative_death + $this->cumulative_recovered));

        return percentageValue($this->cumulative_positive, $underTreatment);
    }

    public function getDailyPositiveCaseAttribute()
    {
        return averageCount($this->cumulative_positive, $this->day);
    }

    public function getDailyRecoveredCaseAttribute()
    {
        return averageCount($this->cumulative_recovered, $this->day);
    }

    public function getDailyDeathCaseAttribute()
    {
        return averageCount($this->cumulative_death, $this->day);
    }
}
